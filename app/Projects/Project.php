<?php

namespace App\Projects;

use App\Teams\Team;
use App\Users\User;
use App\Base\Models\Model;
use App\Purchases\Purchase;

class Project extends Model
{
	protected $table = 'projects';

	protected $fillable = [
		'user_id',
		'team_id',
		'name',
		'description',
		'started',
		'ended',
	];

	protected $casts = [
		'started' => 'datetime',
		'ended' => 'datetime',
	];

	public function user()
	{
		return $this->belongsTo(User::class);
	}

	public function team()
	{
		return $this->belongsTo(Team::class);
	}

	public function purchases()
	{
		return $this->hasMany(Purchase::class);
	}
}
