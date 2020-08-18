<?php

namespace App\Projects\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProjectsResource extends JsonResource
{
	public function toArray($request)
	{
		return [
			'id' => $this->id,
			'user' => $this->user,
			'team' => $this->team,
			'name' => $this->name,
			'description' => $this->description,
			'started' => $this->started->format('F jS, Y'),
			'ended' => $this->ended,
		];
	}
}
