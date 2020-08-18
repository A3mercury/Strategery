<?php

Route::group(['namespace' => 'Projects\Controllers'], function () {

	Route::get('projects')
		->name('projects.index')
		->uses('ProjectsApiController@index');

	Route::get('projects/{project}')
		->name('projects.get')
		->uses('ProjectsApiController@get');

	Route::post('projects/create')
		->name('projects.create')
		->uses('ProjectsApiController@store');

	Route::post('projects/{project}/update')
		->name('projects.update')
		->uses('ProjectsApiController@update');

	Route::post('projects/{project}/delete')
		->name('projects.delete')
		->uses('ProjectsApiController@delete');
});
