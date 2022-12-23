<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function getProfileFromUser($user_id){

        $profile = User::find($user_id)->profile()->get();

        return response()->json([
            'status' => 200, 
            'profiles' => $profile
        ]);
    }
}
