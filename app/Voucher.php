<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Voucher extends Model
{
    public $timestamps = FALSE;

    protected $fillable = [
        'from',
        'from_email',
        'to',
        'to_email',
        'amount',
        'message',
    ];
}
