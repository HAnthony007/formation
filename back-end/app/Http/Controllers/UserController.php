<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Validator;

class UserController extends Controller
{
    public function getId(){
        $user = JWTAuth::user();  // Récupère l'utilisateur connecté
        if (!$user) {
            return response()->json(['message' => 'Utilisateur non authentifié'], 401);
        }
        return $user->id;  // Retourne juste l'ID de l'utilisateur
    }
    public function allUser(Request $request){
        $users=User::all();
        return response()->json($users);
    }

    public function userConnecter(Request $request){
        $user = $request->get("user");
        return response()->json([
            'user'=>[
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role,
            ]
        ]);
    }

    public function update(Request $request){
        $validator=Validator::make($request->all(),[
            'email'=>"required|max:255",
            'name'=>'required|max:255',
            'firstName'=>'required|max:255',
            'photo'=>'nullable|mimes:jpeg,jpg|max:255',
            'password'=>'required|max:255'
        ]);
        $user=User::find($request->get("id"));
        if (!$user){
            return response()->json(['message'=>"Veuillez vous connecter"],404);
        }
        $user->update($validator->valid());
        if ($request->hasFile('user_photo')){
            $file = $request->file('user_photo');
            $filePath = 'user_photo/' . $file->getClientOriginalName();
            $file->move(public_path('user_photo/'), $file->getClientOriginalName());
            $user->photo=$filePath;
        }
        $user->save();
        return response()->json(["message"=>"Modification effectuer"],200);
    }

    public function updatePts(Request $request){
        $validator=Validator::make($request->all(),[
            'points'=>"nullable|numeric"
        ]);
        if ($validator->fails()){
            return response()->json(["message"=>$validator->errors()],400);
        }
        $user=User::find($request->get("id"));
        $user->points+=$request->points;
        $user->save();

        return response()->json(["message"=>"Vous avez reçus ".$request->points."pts"],201);
    }

    public function updateLvl(Request $request){
        $validator=Validator::make($request->all(),[
            'level'=>"nullable|numeric"
        ]);
        if ($validator->fails()){
            return response()->json(["message"=>$validator->errors()],400);
        }
        $user=User::find($request->get("id"));
        $user->level+=$request->level;
        $user->save();

        return response()->json(["message"=>$request->level<0? "Votre niveau a diminué de ".$request->level:"Votre niveau a augmenté de ".$request->level],201);
    }

}
