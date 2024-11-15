<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $primaryKey="id_cours";

    protected $fillable=[
        'title',
        'description',
        'language',
        'category',
        'status',
    ];
}
