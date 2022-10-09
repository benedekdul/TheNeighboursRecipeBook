@extends('layouts.master')

@section('title')
    Register
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
              <h3>Join the <strong>TNRB</strong> experience now!</h3>
              <!-- <p class="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p> -->
              </div>
              <form action="{{ route('signup') }}" method="post">
                <input type="hidden" name="_token" value="{{ Session::token() }}">
                <div class="form-group first">
                  {{-- <label for="username">Username or email</label> --}}
                  <input type="text" class="form-control {{ $errors->has('username') ? 'is-invalid' : '' }}" placeholder="Username..." name="username" value="{{ Request::old('username') }}">
                  @if($errors->has('username'))
                  @include('includes.display_errors', ['errorType' => 'username'])
                  @endif
                </div>
                <div class="form-group first">
                  <input type="text" class="form-control {{ $errors->has('email') ? 'is-invalid' : '' }}" placeholder="E-mail address..." name="email" value="{{ Request::old('email') }}">
                  @if($errors->has('email'))
                  @include('includes.display_errors', ['errorType' => 'email'])
                  @endif
                </div>
                <div class="form-group last mb-3">
                  {{-- <label for="password">Password</label> --}}
                  <input type="password" class="form-control {{ $errors->has('password') ? 'is-invalid' : '' }}" placeholder="Your Password (must be at least 4 characters long)" name="password" value="{{ Request::old('password') }}">
                  @if($errors->has('password'))
                  @include('includes.display_errors', ['errorType' => 'password'])
                  @endif
                </div>
                <input type="submit" value="Create my kitchen" class="btn btn-block btn-warning">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

@endsection
