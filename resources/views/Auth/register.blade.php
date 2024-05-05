<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind Admin Template</title>
    <meta name="author" content="David Grzyb">
    <meta name="description" content="">

    <!-- Tailwind -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');
        .font-family-karla { font-family: karla; }
        .bg-sidebar { background: #3d68ff; }
        .cta-btn { color: #3d68ff; }
        .upgrade-btn { background: #1947ee; }
        .upgrade-btn:hover { background: #0038fd; }
        .active-nav-link { background: #1947ee; }
        .nav-item:hover { background: #1947ee; }
        .account-link:hover { background: #3d68ff; }
    </style>
</head>

<body class=" flex justify-center bg-green-100">
<div id="main" class="flex min-h-full flex-col justify-center space-y-1.5">
    <div class="flex min-h-full flex-col justify-center px-6 lg:px-8">
        <div class="py-1 sm:mx-auto sm:w-full sm:max-w-sm">
            <div class="flex justify-center pb-8 ">
                {{--                <a href="">--}}
                <img src="{{ asset('images/logo.png') }}" height="290px" width="280px" alt="logo">
                {{--                </a>--}}
            </div>
            <h1 class="mb-6 text-center text-3xl font-medium">Create an account</h1>
            <label class="">Account will allow you to all the contents for free</label>
        </div>
        <form action="{{ route('store') }}" method="post" class="px-8 pt-6 pb-8 mb-4 ">
            @csrf
            @method('post')
            <div class="mb-4 md:flex md:justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                    <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="firstName">
                        First Name
                    </label>
                    <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="First Name"
                    />
                </div>
                <div class="md:ml-2">
                    <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="lastName">
                        Last Name
                    </label>
                    <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="surname"
                        name="surname"
                        type="text"
                        placeholder="Last Name"
                    />
                </div>
            </div>
            <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
                    Email
                </label>
                <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                />
            </div>
            <div class="mb-4 md:flex md:justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                    <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="password">
                        Password
                    </label>
                    <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="******************"
                    />
                </div>
                <div class="md:ml-2">
                    <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="c_password">
                        Confirm Password
                    </label>
                    <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="c_password"
                        type="password"
                        placeholder="******************"
                    />
                </div>
            </div>
            <div class="mb-6 text-center">
                <button class="w-full px-4 py-2 font-bold text-white bg-blue-400 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                        type="submit">
                    Register Account
                </button>
            </div>
            <hr class="mb-6 border-t" />
{{--            <div class="text-center">--}}
{{--                <a class="inline-block text-sm text-blue-500 dark:text-blue-400 align-baseline hover:text-blue-800"--}}
{{--                   href="#">--}}
{{--                    Forgot Password?--}}
{{--                </a>--}}
{{--            </div>--}}
            <div class="text-center">
                <a class="inline-block text-sm text-blue-500 dark:text-blue-400 align-baseline hover:text-blue-800"
                   href="{{ route('login') }}">
                    Already have an account? Login!
                </a>
            </div>
        </form>
    </div>
</div>
</div>
<script src="https://js.stripe.com/v3/"></script>
<script src="static.js"></script>
<script src="account.js"></script>

<iframe name="__privateStripeMetricsController2260" frameborder="0" allowtransparency="true" scrolling="no" role="presentation" allow="payment *" src="https://js.stripe.com/v3/m-outer-3437aaddcdf6922d623e172c2d6f9278.html#url=https%3A%2F%2Fobsidian.md%2Faccount&amp;title=Account%20-%20Obsidian&amp;referrer=https%3A%2F%2Fobsidian.md%2F&amp;muid=698093dc-ac77-4fe7-abaf-2839de389fb9cf5731&amp;sid=d7b77e10-9297-419a-92f8-0afa7c8bc0144afb3c&amp;version=6&amp;preview=false" aria-hidden="true" tabindex="-1" style="border: none !important; margin: 0px !important; padding: 0px !important; width: 1px !important; min-width: 100% !important; overflow: hidden !important; display: block !important; visibility: hidden !important; position: fixed !important; height: 1px !important; pointer-events: none !important; user-select: none !important;"></iframe>
</body>

{{--<body class="bg-gray-100 font-family-karla flex">--}}

{{--<div class="w-full h-screen overflow-x-hidden border-t flex flex-col">--}}
{{--    <main class="w-full flex-grow p-6">--}}
{{--        <h1 class="text-3xl text-black pb-6">Register</h1>--}}
{{--        <div class="h-full bg-gray-400 dark:bg-gray-900">--}}
{{--            <!-- Container -->--}}
{{--            <div class="mx-auto">--}}
{{--                <div class="flex justify-center px-6 py-12">--}}
{{--                    <!-- Row -->--}}
{{--                    <div class="w-full xl:w-3/4 lg:w-11/12 flex">--}}
{{--                        <!-- Col -->--}}
{{--                        <div class="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"--}}
{{--                             style="background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"></div>--}}
{{--                        <!-- Col -->--}}
{{--                        <div class="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">--}}
{{--                            <h3 class="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>--}}
{{--                            <form action="{{ route('store') }}" method="post" class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">--}}
{{--                                @csrf--}}
{{--                                @method('post')--}}
{{--                                <div class="mb-4 md:flex md:justify-between">--}}
{{--                                    <div class="mb-4 md:mr-2 md:mb-0">--}}
{{--                                        <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="firstName">--}}
{{--                                            First Name--}}
{{--                                        </label>--}}
{{--                                        <input--}}
{{--                                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"--}}
{{--                                            id="name"--}}
{{--                                            name="name"--}}
{{--                                            type="text"--}}
{{--                                            placeholder="First Name"--}}
{{--                                        />--}}
{{--                                    </div>--}}
{{--                                    <div class="md:ml-2">--}}
{{--                                        <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="lastName">--}}
{{--                                            Last Name--}}
{{--                                        </label>--}}
{{--                                        <input--}}
{{--                                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"--}}
{{--                                            id="surname"--}}
{{--                                            name="surname"--}}
{{--                                            type="text"--}}
{{--                                            placeholder="Last Name"--}}
{{--                                        />--}}
{{--                                    </div>--}}
{{--                                </div>--}}
{{--                                <div class="mb-4">--}}
{{--                                    <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">--}}
{{--                                        Email--}}
{{--                                    </label>--}}
{{--                                    <input--}}
{{--                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"--}}
{{--                                        id="email"--}}
{{--                                        name="email"--}}
{{--                                        type="email"--}}
{{--                                        placeholder="Email"--}}
{{--                                    />--}}
{{--                                </div>--}}
{{--                                <div class="mb-4 md:flex md:justify-between">--}}
{{--                                    <div class="mb-4 md:mr-2 md:mb-0">--}}
{{--                                        <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="password">--}}
{{--                                            Password--}}
{{--                                        </label>--}}
{{--                                        <input--}}
{{--                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"--}}
{{--                                            id="password"--}}
{{--                                            name="password"--}}
{{--                                            type="password"--}}
{{--                                            placeholder="******************"--}}
{{--                                        />--}}
{{--                                        <p class="text-xs italic text-red-500">Please choose a password.</p>--}}
{{--                                    </div>--}}
{{--                                    <div class="md:ml-2">--}}
{{--                                        <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="c_password">--}}
{{--                                            Confirm Password--}}
{{--                                        </label>--}}
{{--                                        <input--}}
{{--                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"--}}
{{--                                            id="c_password"--}}
{{--                                            type="password"--}}
{{--                                            placeholder="******************"--}}
{{--                                        />--}}
{{--                                    </div>--}}
{{--                                </div>--}}
{{--                                <div class="mb-6 text-center">--}}
{{--                                    <button class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"--}}
{{--                                            type="submit">--}}
{{--                                        Register Account--}}
{{--                                    </button>--}}
{{--                                </div>--}}
{{--                                <hr class="mb-6 border-t" />--}}
{{--                                <div class="text-center">--}}
{{--                                    <a class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"--}}
{{--                                       href="#">--}}
{{--                                        Forgot Password?--}}
{{--                                    </a>--}}
{{--                                </div>--}}
{{--                                <div class="text-center">--}}
{{--                                    <a class="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"--}}
{{--                                       href="./index.html">--}}
{{--                                        Already have an account? Login!--}}
{{--                                    </a>--}}
{{--                                </div>--}}
{{--                            </form>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </main>--}}
{{--</div>--}}

{{--</div>--}}

{{--<!-- AlpineJS -->--}}
{{--<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>--}}
{{--<!-- Font Awesome -->--}}
{{--<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" integrity="sha256-KzZiKy0DWYsnwMF+X1DvQngQ2/FxF7MF3Ff72XcpuPs=" crossorigin="anonymous"></script>--}}
{{--</body>--}}
</html>
