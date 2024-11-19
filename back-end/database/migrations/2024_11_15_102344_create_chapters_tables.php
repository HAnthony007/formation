<?php

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
        Schema::create('chapters', function (Blueprint $table) {
            $table->id('id_chpt');
            $table->string('title');
            $table->string('contents');
            $table->string('orders');
            $table->foreignId('cours_id')->constrained('courses', 'id_cours')->onDelete('cascade');
            $table->timestamps();
        });
        

        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('chapters',function (Blueprint $table) {
            $table->dropForeign('cours_id');
        });
        Schema::dropIfExists('chapters');
        
    }
};
