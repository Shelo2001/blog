<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Articles;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{
    public function getArticles(){
        $articles=Articles::orderBy('views','desc')->paginate(8);
        return response($articles);
    }

    public function articleView(Request $request,$id){
        $article=Articles::where('id',$id)->first();
        $article->increment('views');
        $user=User::where('id',$article->user_id)->first();
        return response()->json([
            "article"=>$article,
            "author"=>$user
        ]);
    }

    public function getArticleByCategory($category){
        if($category==='all'){
            $articles=Articles::all();
        } else {
            $articles=Articles::where('category',$category)->get();
        }
        return response($articles);
    }

    public function getMyArticles(Request $request, User $user){
        $articles = $user->Articles;
        return response()->json([
            "articles" => $articles,
        ]);
    }

    public function createArticle(Request $request){

        $attr=$request->validate([
            'image' => 'required',
            'title' => 'required',
            'category' => 'required',
            'description' => 'required',
            'user_id' => 'required',
        ]);

        $article = Articles::create([
            'image' => $attr['image'],
            'title' => $attr['title'],
            'category' => $attr['category'],
            'description' => $attr['description'],
            'user_id'=>$attr['user_id'],
        ]);

        return response()->json([
            "article" => $article,
        ]);
    }

}
