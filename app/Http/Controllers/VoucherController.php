<?php

namespace App\Http\Controllers;
use App\Voucher;
use Illuminate\Http\Request;
use App\Http\Resources\VoucherResource;
use App\Http\Resources\VoucherResourceCollection;

class VoucherController extends Controller
{
    /**
     * @param Voucher $voucher
     * @return VoucherResource
     */

    public function show(Voucher $voucher): VoucherResource{

        return new VoucherResource($voucher);
    }

    public function index(): VoucherResourceCollection {

        return new VoucherResourceCollection(Voucher::paginate());
    }

    public function store(Request $request){
       /*  $request->validate([
            'to'         => 'required',
            'to_email'   => 'required',
            'from'       => 'required',
            'from_email' => 'required',
            'amount'     => 'required',

        ]); */

        $voucher = Voucher::create($request->all());

        return new VoucherResource($voucher);
    }
}
