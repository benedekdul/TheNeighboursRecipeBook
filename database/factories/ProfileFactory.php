<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Profile>
 */
class ProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            //
            'user_id' => rand(0,10),
            'bio' => fake()->text('20'),
            'post_count' => rand(0,10),
            'follower_count' => rand(0,500),
            'following_count' => rand(0,300),
            'profile_picture_path' => fake()->word() . fake()->fileExtension()
        ];
    }
}
