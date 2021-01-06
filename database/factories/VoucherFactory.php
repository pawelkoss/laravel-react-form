<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Voucher;
use Faker\Generator as Faker;

$factory->define(Voucher::class, function (Faker $faker) {
    return [
        'from' => $faker->name,
        'from_email' => $faker->email,
        'to' => $faker->name,
        'to_email' => $faker->email,
        'amount' => $faker->randomDigit*10,
        'message' => $faker->realText(150),
    ];
});
