<?php

Route::group(['middleware' => ['auth:sanctum']], function () {
	Route::view('/projects/{project}', 'react-app');
	Route::view('/{path?}', 'react-app');
});
