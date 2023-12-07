<?php
use App\Http\Controllers\QueryController;
use App\Http\Controllers\NewController;
use App\Http\Controllers\MainController;
use Illuminate\Support\Facades\Route;




// // Route:: get('/','NewController@footerpage');
// Route::get('/header',[NewController::class,'footerpage']);
// Route::get('/home',[NewController::class,'homepage']);
// Route::get('/footer',[NewController::class,'footerpage']);



//for MainController
Route::get('/',[MainController::class,'mainpage']);
Route::get('/contact',[MainController::class,'contactpage']);
Route::get('/featurce',[MainController::class,'featurcepage']);




// Route::get('/allpeople',[MainController::class,'allpeople']);

// // QueryController
// Route::get('/queryData', [QueryController::class,'whereSelector'] );
// Route::get('/user', [QueryController::class,'index'] );
// Route::get('/testModel', [QueryController::class,'testModel'] );




// Route:: get('/home/{world}',function($worl){
//     echo view('home',[
//         'name'=>$worl
//     ]);
// });

// Route:: get('/header/{jahid}',function($aso){
//     echo view("header",[
//         'name'=>$aso,
//         'time'=>time()
//     ]);
// });

// Route:: get('/{name}',function($name){
//     $name=ucwords($name);
//     echo"this is {$name}";
// });
