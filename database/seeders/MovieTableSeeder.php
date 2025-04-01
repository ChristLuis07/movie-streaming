<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;
class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $movies = [
    [
        'name' => 'Inception',
        'slug' => 'inception',
        'category' => 'Sci-Fi',
        'video_url' => 'https://www.youtube.com/watch?v=YoHD9XEInc0',
        'thumbnail' => 'https://www.themoviedb.org/t/p/original/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
        'rating' => 8.8,
        'is_featured' => true,
    ],
    [
        'name' => 'Interstellar',
        'slug' => 'interstellar',
        'category' => 'Sci-Fi',
        'video_url' => 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
        'thumbnail' => 'https://www.themoviedb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
        'rating' => 8.7,
        'is_featured' => true,
    ],
    [
        'name' => 'Parasite',
        'slug' => 'parasite',
        'category' => 'Thriller',
        'video_url' => 'https://www.youtube.com/watch?v=SEUXfv87Wpk',
        'thumbnail' => 'https://www.themoviedb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
        'rating' => 8.6,
        'is_featured' => true,
    ],
];
        Movie::insert($movies);
    }
}
