<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <title>{{ env('APP_NAME') }} @yield('title')</title>

    @section('header-meta')
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    @show

    @section('header-css')
        <link rel="icon" type="image/png" sizes="16x16" href={{ asset('/images/misc/favicon-16x16.png') }}>
        <link rel="icon" type="image/png" sizes="32x32" href={{ asset('/images/misc/favicon-32x32.png') }}>
        <link rel="stylesheet" href="{{ mix('/css/farindra.css') }}">
    @show

    @section('header-js')

    @show

    <style>
        nav.nav-scroll {
            position: relative;
            z-index: 2;
            height: 2rem;
            box-sizing: border-box;
            overflow-y: hidden;
            padding: 1rem;
            border-top: 1px solid rgba(0,0,0,0.075);
        }
        nav.nav-scroll > ul {
            overflow-x: auto;
            text-align: center;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 1rem;
        }
        nav.nav-scroll > ul > li > a {
            font-weight: 500;
        }
        .news-slide > li > .uk-card {
            box-shadow: none;
            border:  1px solid rgba(0,0,0,0.075);
        }
        h1, h2, h3, h4, h5, h6 {
            font-weight: 700;
        }
        .uk-logo > img {
            height: 58px;
        }
        #header.uk-sticky-below {
            box-shadow: 0 2px 14px 0 rgba(0,0,0,0.07);
        }

    </style>

</head>
<body>
<div id="root" class="uk-offcanvas-content">

</div>
<script src="{{ mix('/js/farindra.js') }}"></script>
<script src="{{ mix('/js/web.js') }}"></script>
</body>
</html>
