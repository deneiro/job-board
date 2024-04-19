<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Content extends Model
{
    protected $table = 'contents';
    protected $guarded = false;

    // Define the fillable fields
    protected $fillable = ['title', 'author', 'image'];

    // Accessor for getting the full URL of the image
    public function getImageUrlAttribute()
    {
        if ($this->image) {
            return asset('storage/' . $this->image);
        }
        return null;
    }

    public function course(): BelongsTo
    {
        return $this->belongsTo(Content::class);
    }
}
