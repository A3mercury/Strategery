<?php

namespace App\Users;

use App\Base\Models\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Model
{
	use HasApiTokens, Notifiable;
    
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
}
