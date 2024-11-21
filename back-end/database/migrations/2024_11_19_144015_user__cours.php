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
        Schema::create('user_cours', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('cours_id')->constrained('courses','id_cours')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('user_cours',function (Blueprint $table) {
            $table->dropForeign(['user_id']);
            $table->dropForeign(['cours_id']);
            // $table->dropForeign(['cours_id','user_id']);
        });
        Schema::dropIfExists('user_cours');
    }
};
