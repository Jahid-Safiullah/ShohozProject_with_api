<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
class UserController extends Controller
{
    function register(Request $request){
        // return ('data');
        $userData= new User;
        $userData->name=$request->name;
        $userData->email=$request->email;
        $userData->password=Hash::make($request->password);
        $userData->save();
        return $userData;
    }



    function login(Request $request){
        $user=User::where('email',$request->email)->first();

            if(!$user || !Hash::check($request->password, $user->password)){
                return response(
                    [
                        'error'=>'Emali or Password not Matched'
                    ]
                );
            }

        return $user;
    }
}
