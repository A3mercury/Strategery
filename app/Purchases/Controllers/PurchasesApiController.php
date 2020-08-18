<?php

namespace App\Purchases\Controllers;

use App\Purchases\Purchase;
use App\Base\Controllers\Controller;
use App\Purchases\Resources\PurchasesResource;

class PurchasesApiController extends Controller
{
	public function index()
	{
		return PurchasesResource::collection(
			Purchase::all(),
		);
	}

	public function get(Purchase $purchase)
	{
		return new PurchasesResource($purchase);
	}

	public function store()
	{
		$this->validate(request(), [
			'user_id' => 'required|integer|exists:users,id',
			'project_id' => 'required|integer|exists:projects,id',
			'name' => 'required|string|max:128',
			'description' => 'nullable|string|max:256',
			'price_total' => 'required|between:0,999999.99',
			'price' => 'required|between:0,999999.99',
			'tax' => 'required|between:0,999999.99',
			'shipping' => 'required|between:0,999999.99',
			'type' => 'required|in:'.implode(',', array_keys(Purchase::$types)),
			'link_url' => 'nullable|url',
			'status' => 'required|in:'.implode(',', array_keys(Purchase::$statuses)),
		]);

		$purchase = Purchase::create(request()->all());

		return response()->json([
			'purchases' => Purchase::all(),
		]);
	}

	public function update(Purchase $purchase)
	{
		$this->validate(request(), [
			'user_id' => 'required|integer|exists:users,id',
			'project_id' => 'required|integer|exists:projects,id',
			'name' => 'required|string|max:128',
			'description' => 'nullable|string|max:256',
			'price_total' => 'required|between:0,999999.99',
			'price' => 'required|between:0,999999.99',
			'tax' => 'required|between:0,999999.99',
			'shipping' => 'required|between:0,999999.99',
			'type' => 'required|in:'.implode(',', array_keys(Purchase::$types)),
			'link_url' => 'nullable|url',
			'status' => 'required|in:'.implode(',', array_keys(Purchase::$statuses)),
		]);

		$purchase->update(request()->all());

		return response()->json([
			'purchase' => $purchase,
		]);
	}

	public function delete(Purchase $purchase)
	{
		$purchase->delete();

		return response()->json([
			'message' => 'Purchase deleted successfully.',
		]);
	}
}
