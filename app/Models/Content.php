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
    protected $fillable = ['title', 'introduction', 'grammar', 'vocabulary', 'tasks'];

    // Accessor for getting the full URL of the imag
    public function course(): BelongsTo
    {
        return $this->belongsTo(Content::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
