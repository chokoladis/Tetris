<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Tetris | Main menu</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        
        @vite(['resources/js/app.js'])
        {{-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> --}}

    </head>
    <body class="antialiased">
        <main>
            <div class="container">
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                        start
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">statistics</a>
                    <a href="#" class="list-group-item list-group-item-action">settings</a>
                    <a class="list-group-item list-group-item-action disabled" aria-disabled="true">exit</a>
                </div>
            </div>
        </main>
    </body>
</html>
