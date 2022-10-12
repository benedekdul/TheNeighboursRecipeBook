<ul style="color: red">
    @foreach ($errors->get($errorType) as $error)
        <li>{{ $error }}</li>
    @endforeach
<ul>
    