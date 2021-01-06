<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/
/*use App\Voucher;

Route::get('/voucher/{voucher}', function(Voucher $voucher){

    $voucher = [
        'from' => 'Paul',
        'emailFrom' => 'paul@gmail.com',
    ];
    return $voucher;


    return $voucher;

});
*/
//Route::get('/voucher/{voucher}', 'VoucherController@show');
Route::apiResource('/voucher', 'VoucherController')->only(['show','store']);
Route::apiResource('/vouchers', 'VoucherController')->only('index');

//Route::apiResource('/voucher', 'VoucherController');

