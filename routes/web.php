<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\PostController;
use App\Http\Controllers\Auth\LoginController;

/*
|--------------------------------------------------------------------------
| Authentication routes
|--------------------------------------------------------------------------
|
| Here are all the routes for the authentication system, such as login, register.
|
*/

Route::post('login', [LoginController::class, 'authenticate']);

/*
|--------------------------------------------------------------------------
| Feed routes
|--------------------------------------------------------------------------
|
| Here are all the routes for the feed.
|
*/

Route::resource('Posts', PostController::class); 
Route::post('store-post', [App\Http\Controllers\PostController::class, 'store']);

//Route::post('posts/create', [PostController::class, 'store'])->name('posts.store');
//Route::get('posts/create', [PostController::class, 'create'])->name('posts.create');
//Not-Yet working routes from LEGACY code
//Views do not exists right now, and it will be done differently by Benedek

//i only left this here temporarily
Route::get('test', [App\Http\Controllers\PostController::class, 'getPost']);
Route::get('testAll', [App\Http\Controllers\PostController::class, 'getAllPosts']);

/*
|--------------------------------------------------------------------------
| Other routes
|--------------------------------------------------------------------------
|
| Here are all the other routes for the app.
|
*/

Route::get('/', function(){
    return view('home');
})->name('home');
