<?php

namespace App\Http\Controllers;



use App\Http\Requests\Content\StoreRequest;
use App\Models\Content;
use App\Models\Course;


class ContentController extends Controller
{

    public function index()
    {
        $contents = Content::all();
        return view('content.show');
    }

    public function create(Course $course)
    {
        return view('content.create', compact('course'));
    }

    public function store(StoreRequest $request, Course $course)
    {
        $data = $request->validated();

        if ($request->hasFile('image'))
        {
            // Store the image file
            $imagePath = $request->file('image')->store('images', 'public'); // Store image in storage/app/public/images directory

            // Save the image path in the database
            $data['image'] = $imagePath;
        }

        $content = new Content();
        $content->course_id = $course->id;
        $content->title = $data['title'];
        $content->author = $data['author'];
        if (isset($data['image'])) {
            $content->image = $data['image'];
        }

        $content->save();

        return redirect()->route('course.show', ['course' => $course->id]);
    }
}
