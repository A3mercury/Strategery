<?php

namespace App\Units\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UnitsResource extends JsonResource
{
	public function toArray($request)
	{
		return [
			'id' => $this->id,
			'name' => $this->name,
			'description' => $this->description,
			'type' => $this->type,
			'subtype' => $this->subtype,
			'quantity' => $this->quantity,
			'quantity_in_stock' => $this->quantity_in_stock,
			
			'unit_items' => $this->unit_items,
		];
	}
}