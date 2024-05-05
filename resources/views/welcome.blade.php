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
<body class="theme-dark h-full scroll-smooth">
<div id="main" class="flex min-h-full flex-col justify-center">
    <div class="flex min-h-full flex-col justify-center px-6 lg:px-8">
        <div class="py-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <div class="flex justify-center pb-8">
                <a href="">
                    <img src="/storage/app/public/images/selected_logo.png" height="90" width="90" alt="logo">
                </a>
            </div>
            <h1 class="mb-6 text-center text-3xl font-medium">Sign in to your account</h1>
            <div class="message-container mb-2">
                <div class="text-green-400 text-sm text-center p-2 rounded border border-green-900 bg-green-950" style="display: none;">

                </div><div class="text-red-400 text-sm text-center p-2 rounded border border-red-900 bg-red-950" style="display: none;">

                </div>
            </div>
            <form class="space-y-3">
                <div>
                    <label class="input-label" for="labeled-input-email">Email</label>
                    <input class="block input w-full" type="email" id="labeled-input-email" autofocus="" data-sider-select-id="32cc6673-4fb5-4910-9437-a66a09708304">
                </div>
                <div>
                    <div class="flex items-center justify-between">
                        <label class="input-label" for="labeled-input-password">Password</label>
                        <span class="font-medium text-sm">
                            <a href="#" class="text-accent" tabindex="-1">Forgot password?</a>
                        </span>
                    </div>
                    <input class="block input w-full" type="password" id="labeled-input-password">
                </div>
                <div style="display: none;">
                    <label class="input-label" for="labeled-input-mfa">2-factor authentication code</label>
                    <input class="block input w-full" type="text" inputmode="numeric" placeholder="000000" autocomplete="one-time-code" id="labeled-input-mfa">
                </div>
                <div>

                </div>
                <p>
                    <button type="button" class="font-medium text-sm text-accent" style="display: none;">Use recovery code</button>
                </p>
                <div class="pt-2">
                    <button class="button button-primary w-full">Sign in</button>
                </div>
            </form>
            <div class="my-8 leading-6 font-medium text-sm">
                <p class="text-center text-muted">Don't have an account?
                    <a href="#" class="text-accent">Create an account</a>
                </p>
            </div>
        </div>
    </div>
</div>
<script src="https://js.stripe.com/v3/"></script>
<script src="static.js"></script>
<script src="account.js"></script>


<iframe name="__privateStripeMetricsController2260" frameborder="0" allowtransparency="true" scrolling="no" role="presentation" allow="payment *" src="https://js.stripe.com/v3/m-outer-3437aaddcdf6922d623e172c2d6f9278.html#url=https%3A%2F%2Fobsidian.md%2Faccount&amp;title=Account%20-%20Obsidian&amp;referrer=https%3A%2F%2Fobsidian.md%2F&amp;muid=698093dc-ac77-4fe7-abaf-2839de389fb9cf5731&amp;sid=d7b77e10-9297-419a-92f8-0afa7c8bc0144afb3c&amp;version=6&amp;preview=false" aria-hidden="true" tabindex="-1" style="border: none !important; margin: 0px !important; padding: 0px !important; width: 1px !important; min-width: 100% !important; overflow: hidden !important; display: block !important; visibility: hidden !important; position: fixed !important; height: 1px !important; pointer-events: none !important; user-select: none !important;"></iframe></body>




<body class="bg-gray-100 font-family-karla flex">



<div class="w-full flex flex-col h-screen overflow-y-hidden">

    <div class="w-full overflow-x-hidden border-t flex flex-col ">
        <aside class="justify-center">
            <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                <a href="{{ route('register')}}"> <i class=""></i>Register</a>
            </button>
            <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                <a href="{{ route('login')}}"> <i class=""></i>Login</a>
            </button>
        </aside>
        <main class="w-full flex-grow p-6">
            <h1 class="text-3xl text-black pb-6 justify-center ">Courses</h1>
            @foreach($courses as $course)
                <a href="{{ route('course.show', $course->id) }}" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 mb-4">
                    <div class="flex flex-col justify-between p-4 ">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Title: {{ $course->title }}</h5>
                        <div>
                            Level: {{ $course->englishLevel }}
                        </div>
                        <p class="mb-3 font-normal text-gray-700">Description: {{ $course->description }}</p>
                    </div>
                </a>
            @endforeach
        </main>
    </div>

</div>

<!-- AlpineJS -->
<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
<!-- Font Awesome -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" integrity="sha256-KzZiKy0DWYsnwMF+X1DvQngQ2/FxF7MF3Ff72XcpuPs=" crossorigin="anonymous"></script>
<!-- ChartJS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js" integrity="sha256-R4pqcOYV8lt7snxMQO/HSbVCFRPMdrhAFMH+vr9giYI=" crossorigin="anonymous"></script>

<script>
    var chartOne = document.getElementById('chartOne');
    var myChart = new Chart(chartOne, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    var chartTwo = document.getElementById('chartTwo');
    var myLineChart = new Chart(chartTwo, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
</script>
</body>
</html>


