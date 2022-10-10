<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller{
    public function getFeed(){
        return view('feed');
    }

    //HANDLE REGISTER FORM
    public function postSignUp(Request $request){
        $this->validate($request, [
            'email' => 'required|email|unique:users',
            'username' => 'required|unique:users|max:120',
            'password' => 'required|min:4'
        ]);

        $email = $request['email'];
        $username = $request['username'];
        $password = bcrypt($request['password']);

        $user = new User();
        $user->email = $email;
        $user->username = $username;
        $user->password = $password;

        $user->save();

        Auth::login($user);

        return redirect()->route('feed');
    }

    //HANDLE LOGIN FORM
    public function postSignIn(Request $request){
        $this->validate($request, [
            'username' => 'required',
            'password' => 'required'
        ]);

        //check against username
        if (Auth::attempt(['username' => $request->username, 'password' => $request->password], $request->remember)) {
            return redirect()->route('feed');
        }
        //check against email!
        elseif (Auth::attempt(['email' => $request->username, 'password' => $request->password], $request->remember)) {
            return redirect()->route('feed');
        }

        return redirect()->back()->withErrors(['username' => 'Wrong username or password']);
    }

    //HANDLE LOGOUT BUTTON
    public function getLogout(){
        Auth::logout();
        return redirect()->route('login');
    }
}
