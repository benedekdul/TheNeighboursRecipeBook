<header>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">TNRB</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <form class="form-inline my-2 my-lg-0 ml-auto mr-auto">
            <div class="main">
                <div class="input-group">
                <input type="text" class="form-control" placeholder="Search...">
                <div class="input-group-append">
                    <button class="btn btn-secondary" type="button">
                    <i class="fa fa-search"></i>
                    </button>
                </div>
                </div>
            </div>
        </form>

        <ul class="navbar-nav ml-auto text-right">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    This is a profile picture
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">My profile</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Messages (69)</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Notifications (420)</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="{{ route('logout') }}">Logout</a>
                </div>
            </li>
        </ul>

    </div>
  </nav>
</header>
  

  {{-- <img class="img-fluid rounded-circle" src="https://ih1.redbubble.net/image.2543151975.5353/flat,128x,075,f-pad,128x128,f8f8f8.jpg"> --}}
