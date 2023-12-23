<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Route;
class RouteController extends Controller
{
    public function add_Route(Request $request){
    // return "jahid";
        \Log::info('Request received:', $request->all());
        $route= new Route;
        $route->from=            $request->from;
        $route->to=              $request->to;
        $route->bus=             $request->bus;
        $route->cost=             $request->cost;
        $route->departure_date = $request->departureDate;
        $route->departure_time = $request->departureTime;

        $route->save();
        return response()->json(['message' => 'Data saved successfully']);
    }



    public function view_Route(){
        $routeList=Route::all();
        return $routeList;
    }
}
