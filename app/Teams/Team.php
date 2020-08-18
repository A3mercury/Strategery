<?php

namespace App\Teams;

use App\Users\User;
use App\Projects\Project;
use App\Base\Models\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Team extends Model
{
	use SoftDeletes;
	
	protected $table = 'teams';

	protected $fillable = [
		'name',
		'description',
	];

	public function users() 
	{
		return $this->belongsToMany(User::class, 'team_user');
	}

	public function projects()
	{
		return $this->hasMany(Project::class);
	}
}
