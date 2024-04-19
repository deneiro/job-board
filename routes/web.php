<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\ContentController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'courses'], function () {
    Route::get('/', [CourseController::class, 'index'])->name('course.index');
    Route::get('/create', [CourseController::class, 'create'])->name('course.create');
    Route::post('/', [CourseController::class, 'store'])->name('course.store');
    Route::get('/{course}', [CourseController::class, 'show'])->name('course.show');
});
Route::group(['prefix' => '{course}'], function (){
    Route::get('/create', [ContentController::class, 'create'])->name('content.create');
    Route::post('/', [ContentController::class, 'store'])->name('content.store');
});







