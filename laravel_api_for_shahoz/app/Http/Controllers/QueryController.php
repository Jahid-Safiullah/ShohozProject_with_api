<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\people;
class QueryController extends Controller
{
    function whereSelector(){
        return(DB::table('people')
            ->where('id','>',1)
            ->where('id','<',5)
            ->orderBy('id','desc')
            ->limit(3)
            ->get(['id','name']));
    }



        /**
         * Show a list of all of the application's users.
         */
        public function index()
        {
            $users = DB::table('people')
            ->where('id','>',1)
            ->where('id','<',5)
            ->orderBy('id','desc')
           // ->limit(1)
            ->get();

            return view('user.index', ['users' => $users]);
        }
//show the data by using Model and use it at the top of this page and not using DB connection here
        function testModel(){
            $pple = people::all()->where('id','>',2);
            return $pple;
        }

}
