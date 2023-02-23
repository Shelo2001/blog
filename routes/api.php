<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\AuthenticationController;

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

Route::group(['middleware' => ['auth:sanctum']], function () {

    Route::get('/profile', function(Request $request) {
        return auth()->user();
    });
    Route::get('/logout', [AuthenticationController::class, 'signout']);
});
Route::get('/categories',[CategoriesController::class,'getCategories']);
Route::get('/articles',[ArticlesController::class,'getArticles']);
Route::post('/articles/create',[ArticlesController::class,'createArticle']);
Route::get('/articles/{category}',[ArticlesController::class,'getArticleByCategory']);
Route::post('/articles/{id}',[ArticlesController::class,'articleView']);
Route::get('/articles/{id}',[ArticlesController::class,'getArticle']);
Route::get('/articles/myarticles/{user}',[ArticlesController::class,'getMyArticles']);
Route::post('/signup', [AuthenticationController::class, 'createAccount']);
Route::post('/signin', [AuthenticationController::class, 'signin']);
