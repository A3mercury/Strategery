<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUnitItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('unit_items', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamp('created')->nullable();
			$table->timestamp('updated')->nullable();
			$table->timestamp('deleted')->nullable();

			$table->integer('unit_id')->unsigned();
			$table->timestamp('date_added')->nullable();
			$table->timestamp('date_sold')->nullable();
			$table->string('status');

			$table->foreign('unit_id')->references('id')->on('units')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('unit_items');
    }
}
