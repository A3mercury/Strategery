<?php

namespace App\Units\Controllers;

use App\Units\Unit;
use App\Projects\Project;
use Illuminate\Support\Facades\DB;
use App\Base\Controllers\Controller;
use App\Units\Resources\UnitsResource;

class UnitsApiController extends Controller
{
	public function index()
	{
		if (request()->has('project')) {
			$project = Project::find(request()->get('project'));
			return UnitsResource::collection(
				$project->units
			);
		}
		
		return UnitsResource::collection(
			Unit::all()
		);
	}

	public function get(Unit $unit)
	{
		return new UnitsResource($unit);
	}

	public function store()
	{
		$this->validate(request(), [
			'user_id' => 'required|integer|exists:users,id',
			'project_id' => 'required|integer|exists:projects,id',
			'name' => 'required|string|max:128',
			'description' => 'nullable|string|max:256',
			'quantity' => 'required|integer',
			'quantity_in_stock' => 'required|integer',
			'price_total' => 'required|between:0,999999.99',
			'discount' => 'required|between:0,999999.99',
			'price' => 'required|between:0,999999.99',
			'tax' => 'required|between:0,999999.99',
			'shipping' => 'required|between:0,999999.99',
		]);

		DB::beginTransaction();

		try {
			$unit = Unit::create(request()->only([
				'user_id',
				'project_id',
				'name',
				'description',
				'quantity',
				'quantity_in_stock',
			]));
	
			for ($i = 0; $i < request()->get('quantity'); $i++) {
				$unit->unitItems()->create([
					'price_total' => request()->get('price_total'),
					'discount' => request()->get('discount'),
					'price' => request()->get('price'),
					'tax' => request()->get('tax'),
					'shipping' => request()->get('shipping'),
					'status' => 'in-stock',
				]);
			}

			DB::commit();

		} catch (\Exception $e) {
			DB::rollback();

			return response()->json([
				'error' => true,
				'message' => $e->getMessage(),
			]);
		}

		return response()->json([
			'units' => Unit::all(),
		]);
	}

	public function update(Unit $unit)
	{
		$this->validate(request(), [
			'user_id' => 'required|integer|exists:users,id',
			'project_id' => 'required|integer|exists:projects,id',
			'name' => 'required|string|max:128',
			'description' => 'nullable|string|max:256',
			'quantity' => 'required|integer',
			'quantity_in_stock' => 'required|integer',
			// 'price_total' => 'required|between:0,999999.99',
			// 'discount' => 'required|between:0,999999.99',
			// 'price' => 'required|between:0,999999.99',
			// 'tax' => 'required|between:0,999999.99',
			// 'shipping' => 'required|between:0,999999.99',
		]);

		$unit->update(request()->all());

		return response()->json([
			'unit' => $unit,
		]);
	}

	public function delete(Unit $unit)
	{
		$unit->delete();

		return response()->json([
			'message' => 'Unit deleted successfully.',
		]);
	}
}
