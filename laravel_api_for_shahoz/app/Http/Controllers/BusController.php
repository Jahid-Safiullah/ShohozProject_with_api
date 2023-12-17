<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bus;

class BusController extends Controller
{
    public function add_bus(Request $request){

        // $request->validate([
        //     'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        // ]);

        $operator= new Bus;
        $operator->bus_name=$request->bus_name;
        $operator->code=$request->code;
        $operator->operator_id=$request->operator_id;
        // $operator->operator_logo = $request->file('images')->store("operator_images");

        // $image = $request->file;
        // $imageName = time() . '.' . $image->getClientOriginalExtension();
        // $request->file->move('Bus_images', $imageName);
        // $operator->operator_logo=$imageName;

        // $operator->total_seats=$request->total_seats;

        $operator->save();
        return $operator;
    }

}
