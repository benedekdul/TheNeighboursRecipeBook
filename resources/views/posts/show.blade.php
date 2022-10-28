@extends('layouts.master')

@section('title')
    Post
@endsection

@section('content')
    <div class = "container">
        <div class = "row">
            <h1>Post</h1>

            
        </div>  
        <div class="form-group row">
                    <label for="caption" class="col-md-4 col-form-label">Post Caption</label>

                    <p> {{ $post->caption }} </p>

                    <img src="{{asset('/storage/images/' . $post->original_filename)}}"> 

                </div>
        <div class = "row">   
            <a href="{{route('posts.edit', $post)}}"> Edit Post </a>
            
        </div>    
</div>

@endsection