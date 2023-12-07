@extends('layout')

@section('middle')


<h2>This is for (Shahoz.com) React Project Api(DB Connection: Shahoz_api)</h2>





{{-- <h1>student</h1>

<table class="table border">
    <thead>
        <tr>
            <th>name</th>
            <th>Phone</th>
            <th>Address</th>
        </tr>

    </thead>
    <tbody>
        @foreach ($people as $p_data )
        <tr>
            <td>{{$p_data->name}}</td>
            <td>{{$p_data->Phone_number}}</td>
            <td>{{$p_data->address}}</td>
        </tr>
        @endforeach
    </tbody>
  </table>

  <div class="input-group mb-3">
    <select name="student" class="form-select" id="inputGroupSelect02">
      <option selected>Choose...</option>
      @foreach ($college as $data)
      <option value="{{$data->id}}">{{$data->name}}</option>
      @endforeach

    </select>
    <label class="input-group-text" for="inputGroupSelect02">Options</label>
</div>
 --}}

@endsection
