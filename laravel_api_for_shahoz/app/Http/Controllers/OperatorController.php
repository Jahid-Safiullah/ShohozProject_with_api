<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Operator;

class OperatorController extends Controller
{
    public function add_operator(Request $request){

        // $request->validate([
        //     'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        // ]);

        $operator= new Operator;
        $operator->operator_name=$request->name;
        $operator->operator_email=$request->email;
        $operator->operator_phone=$request->phone;
        $operator->operator_address=$request->address;
        // $operator->operator_logo = $request->file('images')->store("operator_images");
        $image = $request->file;
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $request->file->move('operator_images', $imageName);
        $operator->operator_logo=$imageName;
        // $operator->status=$request->status;
        $operator->save();
        return $operator;
    }

    function viewOperator (){
        $operator=Operator::all();
        return $operator;
    }


    function deleteOperator($id){
        $operatorData=Operator::find($id)->delete();
        if($operatorData){
            return("product has been deleted");
        }
        else{
            return("product has not been deleted");
        }
      
    }
}
