<?php

Route::group(['middleware' => ['auth:sanctum']], function () {
	Route::view('/{path?}', 'react-app');
});
