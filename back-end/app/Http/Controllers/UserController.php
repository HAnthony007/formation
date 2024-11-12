<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
    public function allUser(Request $request){
        $users=User::all();
        return response()->json($users);
    }

    public function userConnecter(Request $request){
        $user = JWTAuth::user();
        return response()->json([
            'user'=>[
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role,
            ]
        ]);
    }
}
