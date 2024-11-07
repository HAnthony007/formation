<?php

namespace App\Http\Controllers;

use App\Models\User;
use Hash;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Validator;

class AuthController extends Controller
{


    public function login(Request $request){
        $credentials=$request->only('email','password');
        try{
            if (!$token=JWTAuth::attempt($credentials)){
                return response()->json(['error'=>'Mdp ou email faux'],401);
            }
        }
        catch(JWTException $e){
            return response()->json(['error'=>'Acces token fails'],401);
        }
        

        $user = JWTAuth::user();

        return response()->json([
            'token' => $token,
            'user' => [
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role,
            ]
        ]);
    }

    public function register(Request $request){
        $validator=Validator::make($request->all(),[
            'name'=>'required|max:255',
            'email'=>'required|email|max:255|unique:users',
            'role'=>'required|max:255',
            'password'=>'required|max:255'
        ]);

        if ($validator->fails()){
            return response()->json($validator->errors(),400);
        }

        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'role' => $request->role,
                'password' => Hash::make($request->password)
            ]);
    
            return response()->json(['message' => 'User created'], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create user: ' . $e->getMessage()], 500);
        }
    }
}
