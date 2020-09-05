<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PurchaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = DB::table('users')->where('email', 'austin@aandrews.us')->first();
        $project = DB::table('projects')->where('name', 'Artisan Keycaps')->first();
        $now = Carbon::create($project->started);
        
        // Single Purchase
        DB::table('purchases')->insert([
            'user_id' => $user->id,
            'project_id' => $project->id,
            'name' => 'Shop Fox W1799 2-1/4 gallon Paint Tank',
            'description' => 'With a 2-1/4 Gallon capacity, this Paint Tank features a galvanized steel tank, double output regulator and pressure relief/safety valve. Lid gasket and clamps stay attached during lid removal.',
            'price_total' => 139.99,
            'price' => 120.00,
            'tax' => 19.99,
            'shipping' => 0.00,
            'link_url' => 'https://www.amazon.com/dp/B005W1CE4W/ref=cm_sw_em_r_mt_dp_-8avFb8A3T1BA',
            'status' => 'shipped',
            'type' => 'tool',
            'created' => Carbon::now(),
            'updated' => Carbon::now(),
            'purchased' => $now,
        ]);

        // Reocurring
        for ($i = 0; $i < 10; $i++) {
            DB::table('purchases')->insert([
                'user_id' => $user->id,
                'project_id' => $project->id,
                'name' => 'Clear Epoxy Resin Crystal Clear Resin Kit',
                'description' => 'Art resin kit comes with BONUS items so you can get started right away: 2 x 3.38 ounce measuring cups with spouts, 5 x wooden sticks for mixing and a plastic spreader to ensure an even finish.',
                'price_total' => 46.99,
                'price' => 32.99,
                'tax' => 5.00,
                'shipping' => 9.00,
                'link_url' => 'https://www.amazon.com/dp/B08233BV5W/ref=cm_sw_em_r_mt_dp_iFSuFb4W8QPPZ',
                'status' => 'delivered',
                'type' => 'reocurring',
                'created' => Carbon::now(),
                'updated' => Carbon::now(),
                'purchased' => $now->addWeeks($i),
            ]);
        }
    }
}
