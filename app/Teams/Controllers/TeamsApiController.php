<?php

namespace App\Teams\Controllers;

use App\Teams\Team;
use App\Base\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Base\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Teams\Resources\TeamsResource;

class TeamsApiController extends Controller
{
	public function index()
	{
		return TeamsResource::collection(
			Team::all(),
		);
	}

	public function get(Team $team)
	{
		return new TeamsResource($team);
	}

	public function store()
	{
		
		$this->validate(request(), [
			'name' => 'required|string|unique:teams,name|max:48',
			'description' => 'nullable|string|max:256',
		]);
			
		DB::beginTransaction();
		
		try {
			$team = Team::create([
				'name' => request()->get('name'),
				'description' => request()->get('description') ?? '',
			]);

			$team->users()->attach(Auth::id());

			DB::commit();
		} catch (\Exception $e) {
			DB::rollback();

			return response()->json([
				'error' => true,
				'message' => $e->getMessage(),
			]);
		}

		return response()->json([
			'teams' => Team::all(),
		]);
	}

	public function update(Team $team)
	{
		$this->validate(request(), [
			'name' => 'required|string|unique:teams,name|max:48',
			'description' => 'nullable|string|max:256',
			'user_id' => 'nullable|integer|exists:users,id',
		]);

		$team->update([
			'name' => request()->get('name'),
			'description' => request()->get('description'),
		]);

		return response()->json([
			'team' => $team,
		]);
	}

	public function delete(Team $team)
	{
		$team->delete();

		return response()->json([
			'message' => 'Team deleted successfully.',
		]);
	}
}
