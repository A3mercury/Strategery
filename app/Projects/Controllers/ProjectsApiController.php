<?php

namespace App\Projects\Controllers;

use App\Projects\Project;
use App\Base\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Projects\Resources\ProjectsResource;

class ProjectsApiController extends Controller
{
	public function index()
	{
		return ProjectsResource::collection(
			Auth::user()->projects
		);
	}

	public function get(Project $project)
	{
		return new ProjectsResource($project);
	}

	public function store()
	{
		$this->validate(request(), [
			// 'user_id' => 'required|integer|exists:users,id',
			// 'team_id' => 'required|integer|exists:teams,id',
			'name' => 'required|string|max:48',
			'description' => 'nullable|string|max:256',
			'started' => 'nullable|string',
		]);

		$project = Project::create(
			array_merge(['user_id' => Auth::id()], request()->all())
		);

		return response()->json([
			'projects' => Project::all(),
		]);
	}

	public function update(Project $project)
	{
		$this->validate(request(), [
			// 'user_id' => 'required|integer|exists:users,id',
			// 'team_id' => 'required|integer|exists:teams,id',
			'name' => 'required|string|max:48',
			'description' => 'nullable|string|max:256',
			'started' => 'nullable|string',
			'ended' => 'nullable|string',
		]);

		$project->update(request()->all());

		return response()->json([
			'project' => $project,
		]);
	}

	public function delete(Project $project)
	{
		$project->delete();

		return response()->json([
			'message' => 'Project deleted successfully.',
		]);
	}

}
