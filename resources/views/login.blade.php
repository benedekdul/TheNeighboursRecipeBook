@extends('layouts.master')

@section('title')
    Login
@endsection

@section('content')

<div class="half">
    <div class="bg order-1 order-md-2" style="background-color:ghostwhite"></div>
    <div class="contents order-2 order-md-1">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-6">
            <div class="form-block">
              <div class="text-center mb-5">
              <h3>Login to <strong>TNRB</strong></h3>
              <!-- <p class="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p> -->
              </div>
              <form action="{{ route('signin') }}" method="post">
                <input type="hidden" name="_token" value="{{ Session::token() }}">
                <div class="form-group first">
                  {{-- <label for="username">Username or email</label> --}}
                  <input type="text" class="form-control {{ $errors->has('username') ? 'is-invalid' : '' }}" placeholder="Username or email" name="username" value="{{ Request::old('username') }}">
                  @if($errors->has('username'))
                  @include('includes.display_errors', ['errorType' => 'username'])
                  @endif
                  @if($errors->has('wrongcreds'))
                  @include('includes.display_errors', ['errorType' => 'wrongcreds'])
                  @endif
                </div>
                <div class="form-group last mb-3">
                  {{-- <label for="password">Password</label> --}}
                  <input type="password" class="form-control {{ $errors->has('password') ? 'is-invalid' : '' }}" placeholder="Your Password" name="password" value="{{ Request::old('password') }}">
                  @if($errors->has('password'))
                  @include('includes.display_errors', ['errorType' => 'password'])
                  @endif
                </div>
                <div class="d-sm-flex mb-5 align-items-center">
                  <label class="control control--checkbox mb-3 mb-sm-0"><span class="caption">Remember me</span>
                    <input type="checkbox" name="remember"/>
                    <div class="control__indicator"></div>
                  </label>
                  {{-- <span class="ml-auto"><a href="#" class="forgot-pass">Forgot Password</a></span>  --}}
                </div>
                <input type="submit" value="Log In" class="btn btn-block btn-warning">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
@endsection
