<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

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

    public function update(Request $request, Post $post)
    {
        $data = request()->validate([
            'caption' => 'required',
            'image' => ['required', 'image']

        ]);

        $post->update($data);
        
        
        return redirect()->route('posts.show', $post);
    }

    public function edit(Post $post)
    {

        //if (!Auth::user()->can('update', $post)) abort(403); TODO: authentication

        return view('posts.edit', [
            'post' => $post
        ]);
    }


}

