<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }
            h1 {
                color:  #e8e4d3;
            }
            img {
               /* height: 100%;
                width: auto;*/
                max-height: 360px;
                width: auto;
            }
            .bg1 {                
                
            }
            .bg2 {
               
                position: relative;
                text-align: center;
               
            }
            .btn {
                background-color: rgb(29, 29, 29);
                color: white;
            }
            .btn-sm {
                background-color: darkgrey;
            }
            .amount {
                position: absolute;
                bottom: 0px;
                width: 100%;
                height: 25%;
                
            }
            .row2 {
                display:flex;
                justify-content: center;
                flex-wrap: wrap;
                background-color: #e8e4d3;
            }
            .columnForm {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                
            }
            .form-control {
                background-color: lightgray;
            }

            .content {
                text-align: center;
            }
           
            .bg_content {
                /*display: flex;
                justify-content: center;*/
                background-color: #e8e4d3;
                

            }
            .content-form {
                text-align: left;
            }
            .endForm {
                display: flex;
                justify-content: space-between;
                font-weight: bold;
                text-decoration: underline;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
                border: solid 1px grey;
            }
           

        </style>
    </head>
    <body>
     
 
        <div class="container">
         

            <div class="content">
                <div class="title">
                    Laravel
                </div>

                <div class="links">
                    <a href="/">Home</a>
                    <a href="/form">Voucher Form</a>
                    <a href="/api/vouchers">All vouchers</a>
                   
                    <a href="https://github.com/laravel/laravel">GitHub</a>
                </div>
            </div>
            <div class="content-form mt-3">
                @yield('content')
            </div>
            
        </div>


    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
</html>
