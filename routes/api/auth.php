<?php

Route::group(['namespace' => 'Auth\Controllers'], function () {

    Route::post('logout')
        ->name('logout')
        ->uses('LoginController@logout');

});
