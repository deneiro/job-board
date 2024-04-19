<?php

namespace App\Http\Controllers;

use App\Http\Requests\Course\StoreRequest;
use App\Models\Content;
use App\Models\Course;

class CourseController extends Controller
{
    public function index()
    {
        $courses = Course::all();
        return view('course.index', compact('courses'));
    }

    public function show(Course $course)
    {
        $contents = Content::all();
        return view('course.show', compact(['course', 'contents']));
    }

    public function create()
    {
        return view('course.create');
    }

    public function store(StoreRequest $request)
    {
        $data = $request->validated();

        $course = new Course;
        $course->title = $data['title'];
        $course->description = $data['description'];
        $course->level = $data['level'];

        $course->save();

        return redirect()->route('course.index');
    }

}
