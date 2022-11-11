<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::resource('Posts', PostController::class); 
Route::post('store-post', [App\Http\Controllers\PostController::class, 'store']);

//Route::post('posts/create', [PostController::class, 'store'])->name('posts.store');
//Route::get('posts/create', [PostController::class, 'create'])->name('posts.create');
//Not-Yet working routes from LEGACY code
//Views do not exists right now, and it will be done differently by Benedek

//i only left this here temporarily
Route::get('test', [App\Http\Controllers\PostController::class, 'getPost']);
Route::get('testAll', [App\Http\Controllers\PostController::class, 'getAllPosts']);

Route::get('get-profile/{user_id}', [App\Http\Controllers\PostController::class, 'getPostFromUser']);
