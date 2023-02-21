<?php

namespace Database\Seeders;

use App\Models\Categories;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Categories::create([
            'name'=>'Adventure'
        ]);
        Categories::create([
            'name'=>'Sports'
        ]);
        Categories::create([
            'name'=>'Travel'
        ]);
        Categories::create([
            'name'=>'Food'
        ]);
        Categories::create([
            'name'=>'Fashion'
        ]);
    }
}
