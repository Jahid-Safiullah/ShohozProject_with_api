<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bus;

class BusController extends Controller
{
    public function addBus(Request $request){

        \Log::info('Request received:', $request->all());
        $bus= new Bus;
        $bus->bus_name=$request->bus_name;
        $bus->code=$request->code;
        $bus->operator_id=$request->operator_id;

        $image = $request->file('image');
        if ($image) {
            // If an image is present, proceed with processing
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move('bus_images', $imageName);
            $bus->image = $imageName;
        }

        $bus->total_seats = $request->total_seats ?? 40;

        $bus->save();
        return response()->json(['message' => 'Data saved successfully']);
    }
    public function ViewBus(){
        $busList=Bus::all();
        return $busList;
    }

}
