<?php

Route::group(['namespace' => 'Purchases\Controllers'], function () {

	Route::get('purchases')
		->name('purchases.index')
		->uses('PurchasesApiController@index');

	Route::get('purchases/{purchase}')
		->name('purchases.get')
		->uses('PurchasesApiController@get');

	Route::post('purchases/create')
		->name('purchases.create')
		->uses('PurchasesApiController@store');
	
	Route::post('purchases/{purchase}/update')
		->name('purchases.update')
		->uses('PurchasesApiController@update');

	Route::post('purchases/{purchase}/delete')
		->name('purchases.delete')
		->uses('PurchasesApiController@delete');
});
