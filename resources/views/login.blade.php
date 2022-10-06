@extends('layouts.master')

@section('title')
    Login
@endsection

@section('content')

@include('includes.display_errors')
<div class="col-md-6">
    <h3>log in</h3>
    <form action="{{ route('signin') }}" method="post">
        <div class="form-group">
            <label for="username">Username/email</label>
            <input class="form-control {{ $errors->has('username') ? 'is-invalid' : '' }}" type="text" name="username" id="usrlogin" value="{{ Request::old('username') }}">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input class="form-control {{ $errors->has('password') ? 'is-invalid' : '' }}" type="password" name="password" id="pw" value="{{ Request::old('password') }}">
        </div>
        <button type="submit" class="btn btn-primary">login</button>
        <input type="hidden" name="_token" value="{{ Session::token() }}">
    </form>
</div>
@endsection
