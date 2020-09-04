<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Austin Andrews',
            'email' => 'austin@aandrews.us',
            'password' => Hash::make('password'),
            'created' => Carbon::now(),
            'updated' => Carbon::now(),
        ]);
    }
}
