<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePurchasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchases', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamp('created')->nullable();
			$table->timestamp('updated')->nullable();
			$table->timestamp('deleted')->nullable();

			$table->integer('user_id')->unsigned();
			$table->integer('project_id')->unsigned();
			$table->string('name')->default('');
			$table->string('description')->default('');
			$table->decimal('price_total')->nullable();
			$table->decimal('price')->nullable();
			$table->decimal('tax')->nullable();
			$table->decimal('shipping')->nullable();
			$table->string('type');
			$table->string('link_url')->nullable();
			$table->string('status');

			$table->foreign('user_id')->references('id')->on('users')->onUpdate('restrict')->onDelete('restrict');
			$table->foreign('project_id')->references('id')->on('projects')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('purchases');
    }
}
