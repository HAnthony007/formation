<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use Illuminate\Http\Request;
use Validator;

class ChapterController extends Controller
{

    public function index(){
        return response()->json(Chapter::all(),201);
    }
    public function show($id){
        $chapter=Chapter::find($id);

        if (!$chapter){
            return response()->json(['message'=>"Cours non trouver"],404);
        }
        return response()->json($chapter,201);
    }
    //
    public function store(Request $request){
        $validator=Validator::make($request->all(),[
            'title'=>'required|max:255',
            'contents'=>'required|max:255',
            'orders'=>'required|numeric',
            'cours_id'=>'required|numeric'
        ]);
        
        if ($validator->fails()){
            return response()->json(['message'=>$validator->errors()],400);
        }

        try {
            Chapter::create([
                'title'=>$request->title,
                'contents'=>$request->contents,
                'orders'=>$request->orders,
                'cours_id'=>$request->cours_id,
            ]);
            return response()->json(['message'=>'Enregistrement effectué'],201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create user: ' . $e->getMessage()], 500);
        }

    }

    public function update($id,Request $request){
        $validator=Validator::make($request->all(),[
            'title'=>'required|max:255',
            'contents'=>'required|max:255',
            'orders'=>'required|numeric',
            'cours_id'=>'required|numeric'
        ]);

        if ($validator->fails()){
            return response()->json(['message'=>$validator->errors()],400);
        }

        $chapter=Chapter::find($id);
        if (!$chapter){
            return response()->json(['message'=>"Cours non trouver"],404);
        }
        $chapter->update($validator->valid());
        return response()->json(["message"=>"Modification effectuer"],200);
    }

    public function destroy($id){
        $chapter=Chapter::find($id);

        if (!$chapter){
            return response()->json(['message'=>"Cours non trouver"],404);
        }

        $chapter->delete();

        return response()->json(["message"=>"Suppression effectuer"],200);

    }
    public function showQuestion($id){
        $chapter=Chapter::find($id);
        if (!$chapter){
            return response()->json(['message'=>"Cours non trouver"],404);
        }

        return response()->json($chapter->questions,201);

    }
}
