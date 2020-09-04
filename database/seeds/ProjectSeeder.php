<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = DB::table('users')->where('email', 'austin@aandrews.us')->first();

        DB::table('projects')->insert([
            'user_id' => $user->id,
            'name' => 'Artisan Keycaps',
            'description' => 'Create and sell custom artisan keycaps.',
            'started' => Carbon::createFromFormat('Y-m-d', '2020-03-15'),
            'created' => Carbon::now(),
            'updated' => Carbon::now(),
        ]);

        DB::table('projects')->insert([
            'user_id' => $user->id,
            'name' => 'Neighborhood BBQ & Smoking',
            'description' => 'Create amazing BBQ to sell on the neighborhood Facebook page.',
            'started' => Carbon::createFromFormat('Y-m-d', '2019-09-02'),
            'created' => Carbon::now(),
            'updated' => Carbon::now(),
        ]);

        DB::table('projects')->insert([
            'user_id' => $user->id,
            'name' => 'Custom Skateboards and Longboards',
            'description' => 'Build and paint custom skateboards.',
            'started' => Carbon::createFromFormat('Y-m-d', '2020-01-02'),
            'ended' => Carbon::createFromFormat('Y-m-d', '2020-07-20'),
            'created' => Carbon::now(),
            'updated' => Carbon::now(),
        ]);
    }
}
