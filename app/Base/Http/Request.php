<?php

namespace App\Base\Http;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Arr;

abstract class Request extends FormRequest
{
    protected $validator;
    protected $after_rules = [];
    protected $failed_rules = [];
    
    public function authorize()
    {
        return true;
    }
    
    public function after($field, $rule, callable $callback)
    {
        $this->after_rules[] = func_get_args();
    }

    public function response(array $errors)
    {
        return response()->json([
            'errors' => $errors,
        ]);
    }
    
    public function validator($factory)
    {
        $this->validator = $factory->make(
            $this->all(),
            $this->rules(),
            $this->messages(),
            $this->attributes()
        );
        $this->validator->after(function ($validator) {
            if ($validator->errors()->isEmpty()) {
                foreach ($this->after_rules as $rule) {
                    $callback = $rule[2];
                    $field = $rule[0];
                    $value = Arr::get($this->all(), $field);
                    $rule = $rule[1];
                    $message = $validator->customMessages[$field.'.'.$rule];
                    if (!$callback($value)) {
                        $this->failed_rules[$field][$rule] = null;
                        $validator->errors()->add($field, $message);
                    }
                }
            }
        });
        return $this->validator;
    }
}