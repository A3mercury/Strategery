<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UnitSeeder extends Seeder
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

        $units = [
            [ 'subtype' => '1.25', 'quantity' => 10, 'quantity_in_stock' => 10, 'price' => 29.99, 'tax' => 6.99 ],
            [ 'subtype' => '2.25', 'quantity' => 5, 'quantity_in_stock' => 5, 'price' => 44.99, 'tax' => 9.99 ],
            [ 'subtype' => '6.0', 'quantity' => 2, 'quantity_in_stock' => 2, 'price' => 64.99, 'tax' => 12.89 ],
        ];

        foreach ($units as $unit) {
            $u = DB::table('units')->insert([
                'user_id' => $user->id,
                'project_id' => $project->id,
                'name' => 'Jelly Fish Artisan Keycap Red',
                'description' => 'Beautiful jelly fish red and white artisan keycap. These keys come in 3 different cherry mx sizes; 1.25, 6.0, and 2.25.',
                'type' => 'Cherry MX',
                'subtype' => $unit['subtype'],
                'quantity' => $unit['quantity'],
                'quantity_in_stock' => $unit['quantity_in_stock'], 
                'created' => Carbon::now(),
                'updated' => Carbon::now(),
            ]);

            for ($i = 0; $i < $unit['quantity']; $i++) {
                DB::table('unit_items')->insert([
                    'unit_id' => DB::table('units')
                        ->where('name', 'Jelly Fish Artisan Keycap Red')
                        ->where('subtype', $unit['subtype'])
                        ->first()->id,
                    'price_total' => $unit['price'],
                    'discount' => 0.00,
                    'tax' => $unit['tax'],
                    'shipping' => 12.00,
                    'date_added' => Carbon::now(),
                    'status' => 'in_stock',
                    'created' => Carbon::now(),
                    'updated' => Carbon::now(),
                ]);
            }
        }
    }
}
