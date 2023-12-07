<?php

namespace App\Http\Controllers;
use illuminate\Support\facades\BD;
use Illuminate\Http\Request;
use App\Models\People;
use DB;

class MainController extends Controller
{
    function mainpage(){
        $people=People::all();
        $college=DB::table('college')->get();
        return view('main',compact('people','college'));
    }
    function featurcepage(){
        return view('featurce');
    }

    function contactpage(){
        return view('contact');
    }

}
