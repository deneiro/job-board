<?php

namespace App\Http\Controllers;



use App\Http\Requests\Content\StoreRequest;
use App\Models\Content;
use App\Models\Course;
use Illuminate\Support\Facades\Auth;


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
        $user = Auth::user();

        $data = $request->validated();

        $content = new Content();
        $content->user_id = $user->id;
        $content->course_id = $course->id;

        $content->title = $data['title'];
        $content->author = $user->name;

        foreach (['introduction', 'grammar', 'vocabulary', 'tasks'] as $field) {
            if ($request->hasFile($field)) {
                $path = $request->file($field)->store('public/content_images');
                $content->{$field} = $path;
            }
        }

        $content->save();

        return redirect()->route('course.show', ['course' => $course->id]);
    }

    public function show()
    {
        $content = Content::all();
        return view('content.show', compact(['content']));
    }
}
