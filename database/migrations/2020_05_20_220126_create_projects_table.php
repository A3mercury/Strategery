<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamp('created')->nullable();
			$table->timestamp('updated')->nullable();
			$table->timestamp('deleted')->nullable();

			$table->integer('user_id')->unsigned();
			$table->integer('team_id')->unsigned();
			$table->string('name')->default('');
			$table->string('description')->default('');
			$table->timestamp('started')->nullable();
			$table->timestamp('ended')->nullable();

			$table->foreign('user_id')->references('id')->on('users')->onUpdate('restrict')->onDelete('restrict');
			$table->foreign('team_id')->references('id')->on('teams')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
