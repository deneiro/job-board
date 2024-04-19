<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>English courses</title>
    @vite('resources/css/app.css')
</head>
<body>
    <div class="mb-4">
        {{ $slot }}
    </div>
</body>
</html>