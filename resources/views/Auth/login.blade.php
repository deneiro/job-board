<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <meta name="author" content="Eldar">
    <meta name="description" content="">

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
            <h1 class="mb-6 text-center text-3xl font-medium">Sign in to your account</h1>
            </div>
            <form action="{{ route('authenticate') }}" method="post" class=" justify-center space-y-2.5">
                @csrf
                @method('post')
                <div class="px-1.5">
                    <div class="justify-center ">
                        <label for="email" class="block mb-2 text-sm font-bold text-gray-700 dark:text-white ">Email</label>
                        <div class="col-md-6">
                            <input type="email" class=" min-w-full form-control @error('email') is-invalid @enderror" id="email" name="email" value="{{ old('email') }}">
                            @if ($errors->has('email'))
                                <span class="text-danger text-red-600">{{ $errors->first('email') }}</span>
                           @endif
                        </div>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" >Password</label>
                        <div class="col-md-6">
                            <input type="password" class=" min-w-full form-control @error('password') is-invalid @enderror" id="password" name="password">
                            @if ($errors->has('password'))
                                <span class="text-danger text-red-600">{{ $errors->first('password') }}</span>
                            @endif
                        </div>
                    </div>
                </div>
                <div class="items-center px-24">
                    <button type="submit" class=" text-white bg-blue-400 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 col-md-3 offset-md-5 ">Sign in</button>
                </div>
            </form>

            <div class=" py-0 my-8 leading-6 font-medium text-sm">
                <p class="text-center text-muted">Don't have an account?
                    <a href="{{ route('register') }}" class="text-accent text-blue-600 ">Create an account</a>
                </p>
            </div>
        </div>
    </div>
</div>
<script src="https://js.stripe.com/v3/"></script>
<script src="static.js"></script>
<script src="account.js"></script>

<iframe name="__privateStripeMetricsController2260" frameborder="0" allowtransparency="true" scrolling="no" role="presentation" allow="payment *" src="https://js.stripe.com/v3/m-outer-3437aaddcdf6922d623e172c2d6f9278.html#url=https%3A%2F%2Fobsidian.md%2Faccount&amp;title=Account%20-%20Obsidian&amp;referrer=https%3A%2F%2Fobsidian.md%2F&amp;muid=698093dc-ac77-4fe7-abaf-2839de389fb9cf5731&amp;sid=d7b77e10-9297-419a-92f8-0afa7c8bc0144afb3c&amp;version=6&amp;preview=false" aria-hidden="true" tabindex="-1" style="border: none !important; margin: 0px !important; padding: 0px !important; width: 1px !important; min-width: 100% !important; overflow: hidden !important; display: block !important; visibility: hidden !important; position: fixed !important; height: 1px !important; pointer-events: none !important; user-select: none !important;"></iframe>
</body>

</html>
