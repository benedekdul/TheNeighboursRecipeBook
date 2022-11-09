<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // TODO
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //return view('posts.create');
        // TODO
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = request()->validate([  
            'caption' => 'required',
            'image' => ['required', 'image'] 
        ]); // Request validation

        $file = $request->file('image');
        $data['original_filename'] = $file->getClientOriginalName();
        Storage::disk('public')->put('images/' . $file->getClientOriginalName(), $file->get()); // Image storing

        $data['user_id'] = Auth::id(); // Appending user_id to data

        $post = Post::create($data);
        $request->session()->flash('post-created', $post->caption);
        $post->save(); // Saving the post

        return redirect()->route('posts.show', $post); //Returing the view TODO -> may be obsolete
    }

    public function getPost(){
        return response()->json(Post::find(1));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        //return view('posts.show', ['post' => $post]);
        // TODO
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        // return view('posts.edit', [  'post' => $post ]);
        // TODO
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        /*
         $data = request()->validate([
            'caption' => 'required',
            'image' => ['required', 'image']

        ]);

        $post->update($data);
        
        
        return redirect()->route('posts.show', $post);
        */
        // TODO
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        // TODO
    }
}
