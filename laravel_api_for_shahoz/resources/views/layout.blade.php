<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lravel-Practice</title>
    <link rel="stylesheet" href="{{ asset('assets/style.css') }}"> <!---  css file  --->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body>
    <div class="site-wrapper">

        <div class="site-wrapper-inner">

            <div class="container">

                <div class="masthead clearfix ">
                    <div class="container inner">
                        <h3 class="masthead-brand">Cover</h3>
                        <nav>
                            <ul class="nav masthead-nav">
                                <li><a href="{{ url('/') }}">Home</a></li>
                                <li><a href="{{ url('featurce') }}">Features</a></li>
                                <li><a href="{{ url('contact') }}">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                @yield('middle')



            </div>

        </div>

    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
</body>

</html>
