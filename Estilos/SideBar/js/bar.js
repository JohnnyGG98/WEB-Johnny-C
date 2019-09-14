// Para mostrar la barra

const BTNMENU = document.querySelector('.navbar-toggler');
const CTN = document.querySelector('.overlay');
const MENU = document.querySelector('.mobile-menu');

const OCULTAR_NAV = function(){
  if(MENU.classList.contains('open')){
    MENU.classList.remove('open');
  } else {
    MENU.classList.add('open');
  }

  if(CTN.classList.contains('overlay-open')){
    CTN.classList.remove('overlay-open');
    console.log('Quitamos bloque');
  } else {
    CTN.classList.add('overlay-open');
    console.log('Agregamos bloque');
  }
}

BTNMENU.addEventListener("click", function (){
  OCULTAR_NAV();
});


/* Hacer responsibe el menu*/
const CLIENTE_ALTURA = document.documentElement.clientHeight - 170;
const ALTURA = function(){
  let nav = document.querySelector('.navbar-nav');
  nav.style.cssText = "max-height: " + CLIENTE_ALTURA + "px;";
  console.log('AGREGAMOS ' + CLIENTE_ALTURA);
}

const NAVBARTOGLER = document.querySelector(".navbar .navbar-toggler");
NAVBARTOGLER.addEventListener('click', function(){
  ALTURA();
});


/* Cerrar NAV si clikeo afuera */

CTN.addEventListener('click', function(){
  OCULTAR_NAV();
});
