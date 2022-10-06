@extends('layouts.master')

@section('title')
    Register
@endsection

@section('content')
@include('includes.display_errors')
<div class="row">
    <div class="col-md-6">
        <h3>register</h3>
        <form action="{{ route('signup') }}" method="post">
            <div class="form-group">
                <label for="username">Username</label>
                <input class="form-control {{ $errors->has('username') ? 'is-invalid' : '' }}" type="text" name="username" id="username" value="{{ Request::old('username') }}">
            </div>
            <div class="form-group">
                <label for="email">E-mail</label>
                <input class="form-control {{ $errors->has('email') ? 'is-invalid' : '' }}" type="text" name="email" id="email" value="{{ Request::old('email') }}">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input class="form-control {{ $errors->has('password') ? 'is-invalid' : 'x' }}" type="password" name="password" id="password" value="{{ Request::old('password') }}">
            </div>
            <button type="submit" class="btn btn-primary">register</button>
            <input type="hidden" name="_token" value="{{ Session::token() }}">
        </form>
    </div>
</div>

@endsection