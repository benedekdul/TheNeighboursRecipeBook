<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function getProfileFromUser($user_id){

        $profile = Profile::find($user_id);
        //$posts = Post::where($user_id, 'user_id'); //not working
        return response()->json([
            'status' => 200, 
            'profiles' => $profile
        ]);
    }
}
