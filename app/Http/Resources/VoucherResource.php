<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class VoucherResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    
    public function toArray($request)
    {
        return parent::toArray($request);

        /*
        return [
            'from' => $this->from,
            'to'   => $tis->to,
        ];
        */
    }
}
