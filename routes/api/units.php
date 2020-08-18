<?php

Route::group(['namespace' => 'Units\Controllers'], function () {

	Route::get('units')
		->name('units.index')
		->uses('UnitsApiController@index');

	Route::get('units/{unit}')
		->name('units.get')
		->uses('UnitsApiController@get');

	Route::post('units/create')
		->name('units.create')
		->uses('UnitsApiController@store');

	Route::post('units/{unit}/update')
		->name('units.update')
		->uses('UnitsApiController@update');
	
	Route::post('units/{unit}/delete')
		->name('units.delete')
		->uses('UnitsApiController@delete');
});
