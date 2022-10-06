@if(count($errors) > 0)
<div class="row">
    <div class="col-md-4 col-md-offset-4">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        <ul>
    </div>
</div>
@endif