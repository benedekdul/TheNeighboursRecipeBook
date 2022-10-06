<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;


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

//For login / register forms
Route::post('/signup', [
    'uses' => 'App\Http\Controllers\UserController@postSignUp',
    'as' => 'signup'
]);

Route::post('/signin', [
    'uses' => 'App\Http\Controllers\UserController@postSignin',
    'as' => 'signin',
]);

//accessible urls
Route::get('/', [
    'uses' => 'App\Http\Controllers\UserController@getFeed',
    'as' => 'feed',
    'middleware' => 'auth'
]);

Route::get('/login', function() {
    return view('login');
})->name('login')->middleware('guest');

Route::get('register', function() {
    return view('signup');
})->middleware('guest');

Route::get('logout', [
    'uses' => 'App\Http\Controllers\UserController@getLogout',
    'as' => 'logout'
]);