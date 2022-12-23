<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        
        DB::table('users')->insert([
            'name' => 'execuser1',
            'email' => 'exec1@tnrb.hu',
            'password' => 'exec1'
        ]);

        DB::table('users')->insert([
            'name' => 'execuser2',
            'email' => 'exec2@tnrb.hu',
            'password' => 'exec2'
        ]);
        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        //$this->call(UserSeeder::class);
    }
}
