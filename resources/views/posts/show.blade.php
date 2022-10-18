@extends('layouts.master')

@section('title')
    Post
@endsection

@section('content')
    <div class = "container">
        <div class = "row">
            <h1>Feed</h1>

            /TODO
        </div>  
        <div class = "row">   
            <a href="{{route('posts.create')}}"> Add New Post </a>
            
        </div>    
</div>

@endsection