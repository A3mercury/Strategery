<?php

namespace App\Purchases;

use App\Users\User;
use App\Projects\Project;
use App\Base\Models\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Purchase extends Model
{
	use SoftDeletes;

	protected $table = 'purchases';

	protected $fillable = [
		'user_id',
		'project_id',
		'name',
		'description',
		'price_total',
		'price',
		'tax',
		'shipping',
		'type',
		'link_url',
		'status',
	];

	public static $types = [
		'reocurring' => 'Reocurring',
		'investment' => 'Investment',
		'consumable' => 'Consumable',
		'tool' => 'Tool',
		'other' => 'Other',
	];

	public static $statuses = [
		'bought' => 'Bought',
		'paid' => 'Paid',
		'shipped' => 'Shipped',
		'delivered' => 'Delivered',
		'returned' => 'Returned',
	];

	public function user()
	{
		return $this->belongsTo(User::class);
	}

	public function project()
	{
		return $this->belongsTo(Project::class);
	}

	public function team()
	{
		return $this->project->team();
	}
}
