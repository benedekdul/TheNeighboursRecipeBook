<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
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
        try {
            $data = $request->validate([  
                'caption' => 'required',
                'image' => [ 'required', 'image'] 
            ]); // Request validation
            
            /* Storing the file on the server */
            $fileName = time().'.'.$request['image']->extension();  
            $request['image']->move(public_path('images'), $fileName);

            /* Appending dummy data to the post */
            $data['user_id'] = 1; //Mock data before authentication is enabled
            $data['body'] = "TODO"; // Mock body part of the post until the frontend part is complete ->TODO: Fix in next issue

            /* Image data of the post is the path to the image */
            $data['image'] = public_path('images').'\\'.$fileName;

            $data['original_filename'] = $fileName;

            /* Storing the post in the database */
            $post = Post::create($data);
            $post->save();

            return response()->json([
                'var_caption' => $data['caption'],
                'var_image2' =>  $data['image'],
                'msg' => 'The upload was a success'
            ]); 
        } catch (\Throwable $th) {
            return response()->json([
                'error_message' => $th->getMessage()
            ]);
        }
    }
    /**
     * Deprecated store function for testing
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function testStorePost(Request $request)
    {
        $data = $request;
        try {
            $data = $request->validate([  
                'caption' => 'required',
                'image' => [ 'required', 'image'] 
            ]); // Request validation
            
            /* Storing the file on the server */
            $fileName = time().'.'.$request['image']->extension();  
            $request['image']->move(public_path('images'), $fileName);

            /* Appending dummy data to the post */
            $data['user_id'] = 1; //Mock data before authentication is enabled
            $data['body'] = "TODO"; // Mock body part of the post until the frontend part is complete ->TODO: Fix in next issue

            /* Image data of the post is the path to the image */
            $data['image'] = public_path('images').'\\'.$fileName;

            $data['original_filename'] = $fileName;

            /* Storing the post in the database */
            $post = Post::create($data);
            $post->save();

            return response()->json([
                'var_caption' => $data['caption'],
                'var_image2' =>  $data['image'],
                'msg' => 'The upload was a success'
            ]); 
        } catch (\Throwable $th) {
            return response()->json([
                'status' => '500',
                'message' => $th->getMessage()
            ]);
        }
    }

    public function getPost(){
        return response()->json(Post::find(1));
    }

    public function getAllPosts(){
        return Post::addSelect([
            'authorName' => User::select('name')
            ->whereColumn('id', 'posts.user_id')
        ])->get();
    }
    

    public function getPostFromUser($user_id){

        $posts = Post::find($user_id);
        //$posts = Post::where($user_id, 'user_id'); //not working
        return response()->json([
            'status' => 200, 
            'posts' => $posts
        ]);
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
