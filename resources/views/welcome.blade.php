{{-- <!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"> --}}

    {{-- <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet"> --}}
{{-- </head>

<body  id='body' style="overflow-x:hidden;">
    <div id="app">

    </div>
</body>
</html> --}}

<!doctype html>
<html lang="en">

<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--favicon-->
	<link rel="icon" href="assets/images/favicon-32x32.png" type="image/png" />
	<!--plugins-->
	<link href="{{asset('assets')}}/css/simplebar.css" rel="stylesheet" />
	<link href="{{asset('assets')}}/css/perfect-scrollbar.css" rel="stylesheet" />
	<link href="{{asset('assets')}}/css/metisMenu.min.css" rel="stylesheet" />
	<!-- Bootstrap CSS -->
    {{-- <link href="css/bootstrap.min.css" rel="stylesheet"> --}}

    <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{asset('assets')}}/css/core.css" rel="stylesheet">

        <!-- Theme Style CSS -->
        <link rel="stylesheet" href="{{asset('assets')}}/css/dark-theme.css" />


	{{-- <title>Test - Responsive Bootstrap 5 Admin Template</title> --}}
</head>

<body>
    <!--wrapper-->
    <div id="app">
    </div>
	<!--end switcher-->
	<!-- Bootstrap JS -->
    <!--plugins-->
    <!-- Scripts -->
    {{-- <script src="{{ asset('assets') }}/js/jquery.min.js"></script> --}}
	{{-- <script src="{{asset('assets')}}/js/bootstrap.bundle.min.js"></script> --}}
    <script src="{{ asset('js/app.js') }}" defer></script>
	{{-- <script src="{{asset('assets')}}/js/simplebar.min.js"></script> --}}
	{{-- <script src="{{asset('assets')}}/js/metisMenu.min.js"></script> --}}
	<script src="{{asset('assets')}}/js/perfect-scrollbar.js"></script>
	<!--app JS-->
	{{-- <script src="{{asset('assets')}}/js/core.js"></script> --}}
</body>

</html>
