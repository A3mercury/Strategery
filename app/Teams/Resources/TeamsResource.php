<?php

namespace App\Teams\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TeamsResource extends JsonResource
{
	public function toArray($request)
	{
		return [
			'id' => $this->id,
			'name' => $this->name,
			'description' => $this->description,
			'members' => $this->users,
			'member_count' => $this->users->count(),
			'max_member_count' => $this->max_member_count,

			'created' => $this->created->format('F jS, Y'),
			'update' => $this->updated,
		];
	}
}
