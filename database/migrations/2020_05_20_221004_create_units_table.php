<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUnitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('units', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamp('created')->nullable();
			$table->timestamp('updated')->nullable();
			$table->timestamp('deleted')->nullable();

			$table->integer('user_id')->unsigned();
			$table->integer('project_id')->unsigned();
			$table->string('name')->default('');
            $table->string('description')->nullable()->default('');
            $table->string('type')->nullable()->default('');
            $table->string('subtype')->nullable()->default('');
			$table->integer('quantity')->default(0);
			$table->integer('quantity_in_stock')->default(0);

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
        Schema::dropIfExists('units');
    }
}
