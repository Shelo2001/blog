<?php

namespace App\Http\Controllers;

use App\Models\Articles;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{
    public function getArticles(){
        $articles=Articles::paginate(8);
        return response($articles);
    }

    public function articleView(Request $request,$id){
        $article=Articles::where('id',$id)->first();
        $article->increment('views');
        return response($article);
    }
}