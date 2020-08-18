<?php

namespace App\Users;

use App\Teams\Team;
use App\Projects\Project;
use App\Base\Models\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Auth\Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Notifications\PasswordResetNotification;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

class User extends Model implements AuthenticatableContract, AuthorizableContract, CanResetPasswordContract, MustVerifyEmail
{
	use Authenticatable, Authorizable, HasApiTokens, Notifiable, SoftDeletes;
	
	protected $table = 'users';

    protected $fillable = [
		'name', 
		'email', 
		'password',
    ];

    protected $hidden = [
		'password', 
		'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
	];
	
	public function teams()
	{
		return $this->belongsToMany(Team::class);
	}

	public function projects()
	{
		return $this->hasMany(Project::class);
	}

	public function getEmailForPasswordReset()
	{
		return $this->email;
	}

	public function sendPasswordResetNotification($token)
	{
		$this->notify(new PasswordResetNotification($this));
	}

	public function getEmailForVerification()
	{
		return $this->email;
	}

	public function hasVerifiedEmail()
	{
		return !is_null($this->email_verified_at);
	}

	public function markEmailAsVerified()
	{
		return $this->forceFill([
			'email_verified_at' => $this->freshTimestamp(),
			'is_confirmed' => true,
		])->save();
	}

	public function sendEmailVerificationNotification()
	{
		//
	}

	public function utc($value) 
	{
		return $value;
	}
}
