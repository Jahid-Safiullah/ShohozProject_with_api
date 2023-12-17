<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OperatorController;
use App\Http\Controllers\BusController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [UserController::class,'register']);
Route::post('/login', [UserController::class,'login']);

Route::post('/add-Operator', [OperatorController::class,'add_operator']);
Route::get('/view-Operator', [OperatorController::class,'viewOperator']);
Route::delete('/delete-Operator/{id}', [OperatorController::class,'deleteOperator']);


Route::post('/add-Bus', [BusController::class,'add_bus']);



