<?php

Route::group(['namespace' => 'Teams\Controllers'], function () {

	Route::get('teams')
		->name('teams.index')
		->uses('TeamsApiController@index');

	Route::get('teams/{team}')
		->name('teams.get')
		->uses('TeamsApiController@get');

	Route::post('teams/create')
		->name('teams.create')
		->uses('TeamsApiController@store');

	Route::post('teams/{team}/update')
		->name('teams.update')
		->uses('TeamsApiController@update');

	Route::post('teams/{team}/delete')
		->name('teams.delete')
		->uses('TeamsApiController@delete');
});
