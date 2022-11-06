<?php

use Illuminate\Support\Facades\Route;

//route index register
Route::get('/register', [\App\Http\Controllers\Auth\RegisterController::class, 'index']);

//route store register
Route::post('/register', [\App\Http\Controllers\Auth\RegisterController::class, 'store']);

//route index login
Route::get('/login', [\App\Http\Controllers\Auth\LoginController::class, 'index']);

//route store login
Route::post('/login', [\App\Http\Controllers\Auth\LoginController::class, 'store']);

//route logout
Route::post('/logout', [\App\Http\Controllers\Auth\LoginController::class, 'destroy'])->middleware('auth');

//route dashboard
Route::get('/dashboard', \App\Http\Controllers\DashboardController::class)->middleware('auth');