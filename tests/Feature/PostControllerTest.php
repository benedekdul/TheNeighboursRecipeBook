<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Request;
use App\Http\Controllers\PostController;
use Tests\TestCase;
//use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
//use Tests\TestCase;
use Illuminate\Support\Str;


class PostControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
  

    public function test_post_controller_store_good()
    {
        /*Storage::fake('avatars');
 
        $file = UploadedFile::fake()->image('avatar.jpg');
        // Testing good request 
        $request = Request::create('/store-post', 'POST', [
            'caption' => 'test_caption',
            'body' => 'test_body',
            'image' => $file
        ]);
        $controller = new PostController();
        $response = $controller->store($request);
        //$this->assertEquals(200, $response->getStatusCode());
        $contains = Str::contains($response->content(), "The upload was a success");
        //$this->assertEquals($contains, True);
        
        error_log($response->content());
        
        $controller->destroyAll();*/
    }
    public function test_post_controller_store_no_caption()
    {
        Storage::fake('avatars');
 
        $file = UploadedFile::fake()->image('avatar.jpg');
        /* Testing good request */
        $request = Request::create('/store-post', 'POST', [
            
            'body' => 'test_body',
            'image' => $file
        ]);
        $controller = new PostController();
        $response = $controller->store($request);
        $this->assertEquals(200, $response->getStatusCode());
        $contains = Str::contains($response->content(), "The upload was a success");
        $this->assertEquals($contains, False);
    }
    public function test_post_controller_store_no_body()
    {
        Storage::fake('avatars');
 
        $file = UploadedFile::fake()->image('avatar.jpg');
        /* Testing good request */
        $request = Request::create('/store-post', 'POST', [
            'caption' => 'test_caption',
           
            'image' => $file
        ]);
        $controller = new PostController();
        $response = $controller->store($request);
        $this->assertEquals(200, $response->getStatusCode());
        $contains = Str::contains($response->content(), "The upload was a success");
        $this->assertEquals($contains, False);
    }
    public function test_post_controller_store_no_image()
    {
        Storage::fake('avatars');
 
        $file = UploadedFile::fake()->image('avatar.jpg');
        /* Testing good request */
        $request = Request::create('/store-post', 'POST', [
            'caption' => 'test_caption',
            'body' => 'test_body'
            
        ]);
        $controller = new PostController();
        $response = $controller->store($request);
        $this->assertEquals(200, $response->getStatusCode());
        $contains = Str::contains($response->content(), "The upload was a success");
        $this->assertEquals($contains, False);
    }
    public function test_post_controller_store_not_image()
    {
        Storage::fake('avatars');
 
        $file = UploadedFile::fake()->image('avatar.cmd');
        /* Testing good request */
        $request = Request::create('/store-post', 'POST', [
            'caption' => 'test_caption',
            'body' => 'test_body',
            'image' => $file
        ]);
        $controller = new PostController();
        $response = $controller->store($request);
        $this->assertEquals(200, $response->getStatusCode());
        $contains = Str::contains($response->content(), "The upload was a success");
        $this->assertEquals($contains, False);
    }
}
