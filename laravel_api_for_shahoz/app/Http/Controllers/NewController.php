<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewController extends Controller
{
    function headerpage(){
        return view ("header");
        
    }

    function homepage(){
        return view ("home");
        
    }

    function footerpage(){
        return view ("footer");
        
    }
}
