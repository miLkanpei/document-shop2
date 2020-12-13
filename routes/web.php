<?php

use App\Events\TaskAdded;

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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/{any}', function(){
    $task = ['id' => 1, 'name' => 'ピクミン３おもしろい']; 
    event(new TaskAdded($task));
    return view('App');
})->where('any', '.*');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
