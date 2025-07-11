<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title inertia>{{ config('app.name', 'Laravel') }}</title>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700&display=swap"
    rel="stylesheet">

  <!-- Scripts -->
  @routes
  <!-- アセットの読み込み -->
  <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
  <link href="{{ mix('/css/style.css') }}" rel="stylesheet">
  <script src="{{ mix('/js/app.js') }}" defer></script>
  @inertiaHead
</head>

<body class="font-sans antialiased">
  @inertia
</body>

</html>
