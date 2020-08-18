<?php

namespace App\Units\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UnitsResource extends JsonResource
{
	public function toArray($request)
	{
		return [
			'id' => $this->id,
		];
	}
}