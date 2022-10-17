<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function create()
    {
        return view('posts.create');
    }

    public function store()
    {
        $data = request()->validate([
            'caption' => 'required',
            'image' => ['required', 'image']

        ]);

        auth()->user()->posts()->create($data);
        
        
        dd(request()->all());
    }

    public function edit($PostId)
    {

        //if (!Auth::user()->can('update', $post)) abort(403); TODO: authentication

        return view('posts.edit', [
            'post' => $PostId
        ]);
    }


}

