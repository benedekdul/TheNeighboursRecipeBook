<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register($request){
        $this->validate($request, [
            'email' => 'required|email|unique:users',
            'name' => 'required|unique:users|max:120',
            'password' => 'required|min:4',
        ]);

        $email = $request['email'];
        $username = $request['name'];
        $password = bcrypt($request['password']);

        $user = new User();
        $user->email = $email;
        $user->username = $username;
        $user->password = $password;
        $user->save();

        return response()->json($user);
    }
}
