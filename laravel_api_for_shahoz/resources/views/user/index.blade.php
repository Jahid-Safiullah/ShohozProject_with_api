<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
   <p> user <b>index</b></p>
    {{-- <h1>{{$users['name']}}</h1> --}}

     @foreach($users as $user)

    <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phome-Numeber</th>
            <th scope="col">Created_at</th>
          </tr>
        </thead>
        <tbody>
          <tr>

            <td>{{$user->id}}</td>
            <td> {{$user->name}}</td>
            <td> {{$user->email}}</td>
            <td>{{$user->Phone_number}}</td>
            <td>{{$user->created_at}}</td>
          </tr>

        </tbody>
      </table>

    @endforeach
</body>
</html>
