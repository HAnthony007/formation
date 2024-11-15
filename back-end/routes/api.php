<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CoursController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('/login',[AuthController::class,'login']);
Route::post('/register',[AuthController::class,'register']);

// Route::post('/register',[AuthController::class,'register']);

Route::middleware('auth:api')->group(function(){
    Route::prefix('/User/')->controller(UserController::class)->group(function(){
        Route::get('listeUser','allUser');
        Route::get('userConnecter','userConnecter');
    });
    Route::apiResource('Course',CourseController::class)->except(['create','edit']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
