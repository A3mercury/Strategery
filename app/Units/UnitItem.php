<?php

namespace App\Units;

use App\Units\Unit;
use App\Base\Models\Model;

class UnitItem extends Model
{
	protected $table = 'unit_items';

	protected $fillable = [
		'unit_id',
		'price_total',
		'discount',
		'price',
		'tax',
		'shipping',
		'date_added',
		'date_sold',
		'status',
	];

	protected $casts = [
		'date_added' => 'datetime',
		'date_sold' => 'datetime',
	];

	public static $statuses = [
		'in_stock' => 'In Stock',
		'defected' => 'Defected',
		'sold' => 'Sold',
		'shipped' => 'Shipped',
		'delivered' => 'Delivered',
		'returned' => 'Returned',
	];

	public function unit()
	{
		return $this->belongsTo(Unit::class);
	}
}
