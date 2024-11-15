<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->id('id_quest');
            $table->string('description');
            $table->string('type');
            $table->integer('points');
            $table->foreignId('chpt_id')->constrained('chapters', 'id_chpt')->onDelete('cascade');
            $table->timestamps();
        });
        // Schema::table('responses', function (Blueprint $table) {
        //     $table->foreignIdFor()
        // });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questions');
    }
};
