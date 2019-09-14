


function offCanvasH() {
  let altura = document.documentElement.clientHeight;
  let offCanvas = document.querySelector('.off-canvas');
  offCanvas.style.cssText = "max-height: " + altura + "px;";
}

offCanvasH();

window.addEventListener("resize", function(){
  offCanvasH();
});

/* Acciones del boton de barra */
const BTNTOGLER = document.querySelector('.off-canvas-toggler');
const OVERLAY = document.querySelector('.overlay');


BTNTOGLER.addEventListener('click', function(){
  switchNavbar();
});

OVERLAY.addEventListener('click', function(){
  switchNavbar();
});

function switchNavbar(){
  let wrapper = document.querySelector('.wrapper');
  if(wrapper.classList.contains('active')){
    wrapper.classList.remove('active');
  } else {
    wrapper.classList.add('active');
  }
}
