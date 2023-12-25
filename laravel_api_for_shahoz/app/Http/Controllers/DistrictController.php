<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\District;

class DistrictController extends Controller
{
    public function index()
    {
        $districts = District::all();

        return response()->json([
            'success' => true,
            'data' => $districts ?? [],
        ]);
    }
}
