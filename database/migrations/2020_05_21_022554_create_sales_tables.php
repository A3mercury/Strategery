<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales_tables', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamp('created')->nullable();
			$table->timestamp('updated')->nullable();
			$table->timestamp('deleted')->nullable();

			$table->integer('unit_id')->unsigned();
			$table->integer('unit_item_id')->unsigned();
			$table->decimal('price_total')->nullable();
			$table->decimal('discount')->nullable();
			$table->decimal('price')->nullable();
			$table->decimal('tax')->nullable();
			$table->decimal('shipping')->nullable();
			$table->timestamp('date_sold')->nullable();
			$table->string('status');

			$table->foreign('unit_id')->references('id')->on('units')->onUpdate('restrict')->onDelete('restrict');
			$table->foreign('unit_item_id')->references('id')->on('unit_items')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sales_tables');
    }
}
