<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bus;

class BusController extends Controller
{
    public function add_bus(Request $request){
         // Debugging statements
    dd($request->all()); // Dump the request data
        // $request->validate([
        //     'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        // ]);

        $bus= new Bus;
        $bus->bus_name=$request->bus_name;
        $bus->code=$request->code;
        $bus->operator_id=$request->operator_id;
        // $bus->bus_logo = $request->file('images')->store("bus_images");

        // $image = $request->file('image');
        // $imageName = time() . '.' . $image->getClientOriginalExtension();
        // $request->file->move('Bus_images', $imageName);
        // $bus->image=$imageName;

        $image = $request->file('image');
        if ($image) {
            // If an image is present, proceed with processing
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move('bus_images', $imageName);
            $bus->image = $imageName;
        } 

        $bus->total_seats = $request->total_seats ?? 40;

        $bus->save();
        return $bus;
    }

}
