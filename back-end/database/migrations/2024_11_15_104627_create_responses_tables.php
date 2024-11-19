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
        Schema::create('responses', function (Blueprint $table) {
            $table->id('id_resp');
            $table->text('value');
            $table->boolean('isTrue');
            $table->foreignId('quest_id')->constrained('questions', 'id_quest')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('responses',function (Blueprint $table) {
            $table->dropForeign(['quest_id']);
        });
        Schema::dropIfExists('responses');
    }
};
