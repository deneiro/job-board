<?php

namespace App\Http\Controllers;

use App\Http\Requests\Course\StoreRequest;
use App\Models\Content;
use App\Models\Course;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class CourseController extends Controller
{
    public function landingPage()
    {
        $courses = Course::all(); // Fetch all courses (you might want to paginate this if there are many courses)
        return view('welcome', compact('courses'));
    }
    public function index()
    {
        $user = Auth::user();
        $courses = Course::all();
        return view('course.index', compact('courses', 'user'));
    }
    public function create()
    {
        $user = Auth::user();
        return view('course.create', compact('user'));
    }

    public function store(StoreRequest $request)
    {
        $user = Auth::user();

        $data = $request->validated();

        $course = new Course;
        $course->user_id = $user->id;
        $course->title = $data['title'];
        $course->description = $data['description'];
        $course->level = $data['level'];

        $course->save();

        return redirect()->route('course.index');
    }


    public function show(Course $course)
    {
        $contents = Content::all();
        return view('course.show', compact(['course', 'contents']));
    }



}
