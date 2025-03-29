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
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=NmzuHjWmXOc',
                'thumbnail' => 'https://www.themoviedb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
                'rating' => 9.3,
                'is_featured' => true,
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Crime',
                'video_url' => 'https://www.youtube.com/watch?v=sY1S34973zA',
                'thumbnail' => 'https://www.themoviedb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
                'rating' => 9.2,
                'is_featured' => true,
            ],
            [
                'name' => 'The Dark Knight',
                'slug' => 'the-dark-knight',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
                'thumbnail' => 'https://www.themoviedb.org/t/p/original/qJ2tWtm7pwN3LhQHcLhRcGxGpP.jpg',
                'rating' => 9.0,
                'is_featured' => true,
            ],
        ];
        Movie::insert($movies);
    }
}
