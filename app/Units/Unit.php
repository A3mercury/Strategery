<?php

namespace App\Units;

use App\Users\User;
use App\Units\UnitItem;
use App\Projects\Project;
use App\Base\Models\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Unit extends Model
{
	use SoftDeletes;

	protected $table = 'units';

	protected $fillable = [
		'user_id',
		'project_id',
		'name',
		'description',
		'quantity',
		'quantity_in_stock',
	];

	public function user()
	{
		return $this->belongsTo(User::class);
	}

	public function project()
	{
		return $this->belongsTo(Project::class);
	}

	public function unitItems()
	{
		return $this->hasMany(UnitItem::class);
	}
}
