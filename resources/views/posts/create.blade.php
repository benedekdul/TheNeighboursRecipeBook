@extends('layouts.master')

@section('title', )
    Create Post
@endsection

@section('content')
<form class="p-3" action="/p" enctype="multipart/form-data" method="post">
    @csrf
    <div class="form-group">
        <div class="card">
            <div class="card-header">
                <input style="font-size: 28px;" type="text" placeholder="Enter your post's title here..."id="caption" class="form-control{{ $errors->has('caption') ? ' is-invalid' : '' }}" name="caption" value="{{ old('caption') }}" autocomplete="caption" autofocus>
                @if ($errors->has('caption'))
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $errors->first('caption') }}</strong>
                    </span>
                @endif
            </div>
            <div class="card-body">
                <div class="container">
                    <div class="row p-2">
                        <div class="col-lg-4">
                            <div class="d-flex justify-content-center">
                                <img src="https://www.factoringdivisa.com/images/images/600x400.jpg" width=300 height=200>                            
                            </div>
                            <br>

                            <div class="d-flex justify-content-center">
                                <input type="file" class="form-control" id="image" name="image">
                            </div>
                            @if ($errors->has('image'))
                                <strong>{{ $errors->first('image') }}</strong>
                            @endif
                        </div>
                        <div class="col-lg-8">
                            <textarea 
                                placeholder="Please tell us how to prepare this food...&#10;&#10;- Detail the progress of making the food&#10;- What ingredients do you need?&#10;- How long does it take to make it?"
                                class="form-control" 
                                rows=15>
                            </textarea>
                        </div>
                    </div>
                    <div class="row p-2">
                        <div class="col-lg-12">
                            <div class="d-flex justify-content-end">
                                <button type="submit" class="btn btn-primary p-1">Create post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>
@endsection
