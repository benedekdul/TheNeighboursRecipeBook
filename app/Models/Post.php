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
    
    public function post()
    {
        return $this->belongsTo(User::class);
    }
    
}
