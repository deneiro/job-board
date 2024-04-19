<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Course extends Model
{
    protected $table = 'courses';
    protected $guarded = false;

    const BEGINNER = 1;
    const ELEMENTARY = 2;
    const INTERMEDIATE = 3;
    const ADVANCED = 4;

    static function getEnglishLevels()
    {
        return [
            self::ADVANCED => 'Advanced',
            self::BEGINNER => 'Beginner',
            self::ELEMENTARY => 'Elementary',
            self::INTERMEDIATE => 'Intermediate'
        ];
    }

    public function getEnglishLevelAttribute()
    {
        return self::getEnglishLevels()[$this->level];
    }

    public function content(): HasMany
    {
        return $this->hasMany(Content::class);
    }
}
