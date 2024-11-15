<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    protected $primaryKey='id_quest';

    protected $fillable=[
        'description',
        'type',
        'points',
        'chpt_id'
    ];

    public function chapter(){
        return $this->belongsTo(Chapter::class,'chpt_id','id_chpt');
    }
}
