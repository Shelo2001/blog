<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Articles extends Model
{
    use HasFactory;

    protected $fillable = [
        'image',
        'title',
        'category',
        'description',
        'user_id',
    ];

    public function User() {
        return $this->belongsTo(User::class);
    }
}
