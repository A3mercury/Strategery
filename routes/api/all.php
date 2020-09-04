<?php

Route::group(['middleware' => ['auth:sanctum']], function () {
	include 'auth.php';
	include 'teams.php';
	include 'projects.php';
	include 'purchases.php';
	include 'units.php';
	include 'sales.php';
});
