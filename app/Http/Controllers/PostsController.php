<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Illuminate\Support\Facades\Auth;
use Storage;
use Log;

class PostsController extends Controller
{
    public function create()
    {
        return view('posts.create');
    }

    public function store(Request $request)
    {
        //if (!Auth::user()->can('create', Post::class)) abort(403); TODO Implement post creation policy

        $data = request()->validate([   // TODO rework the validation process , store image in base64
            'caption' => 'required',
            'image' => ['required', 'image'] 

        ]);
        $file = $request->file('image');
        $data['original_filename'] = $file->getClientOriginalName();
        Storage::disk('public')->put('images/' . $file->getClientOriginalName(), $file->get());
        //$image = file_get_contents($request->file('image'));
        //$image = base64_encode($image);
        //$data['image'] = $image;

        /*$data['image'] = base64_encode(file_get_contents($request->file('image')));*/
        $data['user_id'] = Auth::id();
        //error_log($image);
        //error_log($data['image']);

        //auth()->user()->posts()->create($data);
        //error_log($data);
        error_log(Log::info(print_r($data, true)));
        $post = Post::create($data);
        $request->session()->flash('post-created', $post->caption);
        $post->save();
        
        return redirect()->route('posts.show', $post);
        
        //dd(request()->all());

        //TODO Make post saving compliant & test it
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

    public function show(Post $post)
    {
        return view('posts.show', ['post' => $post]);
    }


}

