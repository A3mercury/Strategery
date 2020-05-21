<?php

namespace App\Base\Models;

use DateTime;
use Exception;
use DateTimeZone;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model as Eloquent;

abstract class Model extends Eloquent
{
    const CREATED_AT = 'created';
    const UPDATED_AT = 'updated';
    const DELETED_AT = 'deleted';

    protected $snapshot;

    protected $memoized;

    public function getLogName()
    {
        if (is_null($this->log_name)) {
            throw new Exception('Log name not defined on ' . get_called_class() . '.');
        }

        return (string) $this->{$this->log_name};
    }

    public function getLogAttributes()
    {
        return array_except($this->attributesToArray(), $this->log_guarded);
    }

    public function getLogModifier($attribute)
    {
        if (is_null($this->log_modifiers)) {
            return [];
        }

        if (array_key_exists($attribute, $this->log_modifiers)) {
            return $this->log_modifiers[$attribute];
        }
    }

    public function snapshot($property = null)
    {
        if ($property) {
            $this->snapshot = $this->$property;
        } else {
            $this->snapshot = clone $this;
        }
    }

    public function getSnapshotAttribute()
    {
        return $this->snapshot;
    }

    public function setAttribute($key, $value)
    {
        // Check to see if this value is a date and store it as UTC
        if ($this->dateAttributeShouldBeConvertedToUtc($key, $value)) {
            $value = $this->fromDateTime(
                call_user_func(function () use ($key, $value) {
                    if (Auth::user()) {
                        return Auth::user()->utc($value);
                    }

                    if ($value instanceof DateTime && $value->getTimezone()->getName() === 'UTC') {
                        return $value;
                    }

                    if ($value instanceof DateTime) {
                        return $value->setTimezone(new DateTimeZone('UTC'));
                    }

                    if (is_string($value)) {
                        return $value;
                    }

                    throw new Exception('Unable to convert date to UTC, no timezone defined.');
                })
            );
        }

        return parent::setAttribute($key, $value);
    }

    protected function dateAttributeShouldBeConvertedToUtc($key, $value)
    {
        if (!$value) {
            return false;
        }

        if (in_array($key, $this->getDates(), true)) {
            return true;
        }

        $casts = $this->getCasts();

        if (!isset($casts[$key])) {
            return false;
        }

        return in_array($casts[$key], ['date', 'datetime'], true);
    }

    public function isNot($other)
    {
        return $this->getKey() !== $other->getKey();
    }

    public function utc($date)
    {
        if ($date instanceof DateTime && $date->getTimezone()->getName() === 'UTC') {
            return $date;
        }

        if ($date instanceof DateTime) {
            return $date->setTimezone(new DateTimeZone('UTC'));
        }

        if (!is_null($date) && !is_string($date)) {
            throw new Exception('Unable to convert date to UTC, not a recognized date format: '.gettype($date));
        }

        if (!$this->timezone) {
            throw new Exception('Unable to convert date to UTC, the user has no timezone defined.');
        }

        return Carbon::parse($date, $this->timezone)->setTimezone('UTC');
    }

    public function __get($key)
    {
        if ($this->hasComputedAttribute($key)) {
            return $this->getComputedAttributeValue($key);
        }

        return parent::__get($key);
    }


    public function hasComputed($key)
    {
        return array_key_exists($key, $this->getAttributes());
    }

    public function hasComputedAttribute($key)
    {
        return method_exists($this, camel_case('computed_'.$key));
    }

    public function loadComputed($keys)
    {
        $keys = is_string($keys) ? [$keys] : $keys;

        foreach ($keys as $key) {
            $this->getComputedAttributeValue($key);
        }

        return $this;
    }

    public function getComputedAttributeValue($key)
    {
        if ($this->hasComputed($key)) {
            return $this->getAttribute($key);
        }

        $method = camel_case('computed_'.$key);
        $table = $this->getTable();
        $translator = $this->getComputedModelKeyTranslator($table, $this);
        $subQuery = $this->$method($translator);
        $subQuery = $this->getNormalizedComputedSubQuery($subQuery);
        $value = $subQuery->value($key);

        $this->setAttribute($key, $value);

        return $this->getAttribute($key);
    }

    public function scopeWithComputed($query, $keys)
    {
        $keys = is_string($keys) ? [$keys] : $keys;

        foreach ($keys as $key) {
            $method = camel_case('computed_'.$key);
            $table = $query->getQuery()->from;
            $translator = $this->getComputedModelKeyTranslator($table);
            $subQuery = $this->$method($translator);
            $subQuery = $this->getNormalizedComputedSubQuery($subQuery);

            if (is_null($query->getQuery()->columns)) {
                $query->select($table.'.*');
            }

            $query->selectSub($subQuery, $key);
        }
    }

    protected function getComputedModelKeyTranslator(...$parameters)
    {
        return new class(...$parameters) {
            protected $table;
            protected $instance;

            public function __construct($table, $instance = null)
            {
                $this->table = $table;
                $this->instance = $instance;
            }

            public function __get($key)
            {
                if ($this->instance) {
                    return $this->instance->$key;
                }

                return DB::raw($this->table.'.'.$key);
            }
        };
    }

    protected function getNormalizedComputedSubQuery($query)
    {
        if ($query instanceof EloquentBuilder) {
            $query = $query->getQuery();
        }

        if ($query instanceof QueryExpression) {
            $query = $query->getValue();
        }

        return $query;
    }

    public function loadWhen($condition, $relations)
    {
        return $condition ? $this->load($relations) : $this;
    }
}
