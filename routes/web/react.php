<?php

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/', function () {
        return redirect('/home');
    });
    Route::view('/{path?}', 'react-app');
    Route::view('/projects/{project}', 'react-app');
});
