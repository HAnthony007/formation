<?php

use App\Models\Chapter;
use App\Models\Cours;
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
        Schema::create('courses', function (Blueprint $table) {
            $table->id('id_cours');
            $table->string('title');
            $table->string('description');
            $table->string('language');
            $table->string('category');
            $table->string('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
        // Schema::table('chapters', function (Blueprint $table) {
        //     $table->dropForeignIdFor(Chapter::class);
        // });
    }
};
