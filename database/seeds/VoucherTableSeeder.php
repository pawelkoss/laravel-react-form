<?php

use Illuminate\Database\Seeder;
use App\Voucher;

class VoucherTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Voucher::class, 10)->create();
    }
}
