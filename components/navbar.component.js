//variables
const nav_bar  = document.querySelector('#navbar');


//event_listeners
document.addEventListener('DOMContentLoaded',()=>{
    create_Navbar();
})



//functions
function create_Navbar(){
    let component_navbar= document.createElement('div');
    component_navbar.innerHTML= `<nav class="navbar navbar-expand-lg navbar navbar-dark" style="background-color: black">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="https://www.mitsubishi-motors.mx/content/dam/mitsubishi-motors/images/logos/nav-logo-light.svg"  height="60"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#">MODELS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#">BUY</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link " aria-current="page" href="#">OWNERS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#">DISCOVER</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>`;
  print_Navbar(component_navbar)
}


function print_Navbar(nav){
  nav_bar.appendChild(nav);
}