<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'bio',
        'post_count',
        'follower_count',
        'following_count',
        'profile_picture_path'
    ];

    protected $guarded = [];

    public function user()
    {
        $this->belongsTo(User::class);
    }
}
