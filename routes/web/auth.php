<?php

Route::group(['namespace' => 'Auth\Controllers'], function () {

	# Authentication
	Route::get('login')
		->name('login')
		->uses('LoginController@showLoginForm');

	Route::post('login')
		->uses('LoginController@login');	
	
	Route::post('logout')
		->name('logout')
		->uses('LoginController@logout');

	# Registration
	Route::get('register')
		->name('register')
		->uses('RegisterController@showRegistrationForm');

	Route::post('register')
		->uses('RegisterController@register');

	# Password Reset
	Route::get('password/reset')
		->name('password.request')
		->uses('ForgotPasswordController@showLinkRequestForm');
	
	Route::post('password/email')
		->name('password.email')
		->uses('ForgotPasswordController@sendResetLinkEmail');

	Route::get('password/reset/{token}')
		->name('password.reset')
		->uses('ResetPasswordController@showResetForm');

	Route::post('password/reset')
		->name('password.update')
		->uses('ResetPasswordController@reset');

	# Password Confirmation
	Route::get('password/confirm')
		->name('password.confirm')
		->uses('ConfirmPasswordController@showConfirmForm');

	Route::post('password/confirm')
		->uses('ConfirmPasswordController@confirm');

	# Email Verification
	Route::get('email/verify')
		->name('verification.notice')
		->uses('VerificationController@show');

	Route::get('email/verify/{id}/{hash}')
		->name('verification.verify')
		->uses('VerificationController@verify');

	Route::post('email/resend')
		->name('verification.resend')
		->uses('VerificationController@resend');
});
