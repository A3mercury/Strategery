<?php

namespace App\Purchases\Resources;

use App\Purchases\Purchase;
use Illuminate\Http\Resources\Json\JsonResource;

class PurchasesResource extends JsonResource
{
	public function toArray($request)
	{
		return [
			'id' => $this->id,
			'user' => $this->user,
			'project' => $this->project,
			'team' => $this->team,
			'name' => $this->name,
			'description' => $this->description,
			'price_total' => $this->price_total,
			'price' => $this->price,
			'tax' => $this->tax,
			'shipping' => $this->shipping,
			'type' => Purchase::$types[$this->type],
			'link_url' => $this->link_url,
			'status' => Purchase::$statuses[$this->status],
		];
	}
}
