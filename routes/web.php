<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\ContentController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Models\User;



Route::get('/', fn()=> to_route('login'))->name('welcome');

Route::controller(\App\Http\Controllers\Auth\AuthLoginRegisterController::class)->group( function () {
    Route::get('/register', 'register')->name('register');
    Route::post('/store', 'store')->name('store');
    Route::get('/login', 'login')->name('login');
    Route::post('/authenticate', 'authenticate')->name('authenticate');
    Route::get('/dashboard', fn()=> to_route('course.index'))->name('dashboard');
    Route::post('/logout', 'logo ut')->name('logout');
});

Route::group(['prefix' => 'course'], function () {
    Route::get('/', [CourseController::class, 'index'])->name('course.index');
    Route::get('/create', [CourseController::class, 'create'])->name('course.create');
    Route::post('/', [CourseController::class, 'store'])->name('course.store');
    Route::get('/{course}', [CourseController::class, 'show'])->name('course.show');
});

Route::group(['prefix' => 'course/{course}'], function (){
    Route::get('/create', [ContentController::class, 'create'])->name('content.create');
    Route::post('/', [ContentController::class, 'store'])->name('content.store');
    Route::get('/{content}', [ContentController::class, 'show'])->name('content.show');
});









