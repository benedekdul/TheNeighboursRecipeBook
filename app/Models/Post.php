<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'caption',
        'body',
        'image',
        'original_filename'
    ];

    protected $guarded = [];

    //It is a current issue how the realtions with the models should look, need to discuss
    /*public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }*/
    
}
