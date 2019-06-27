var w = window.innerWidth;
var h = window.innerHeight;

console.log('--------------');
console.log('El alto es: '+h);
console.log('El ancho es: '+w);
console.log('--------------');

var sw = screen.width;
var sh = screen.height;

console.log('El ancho del screen es: '+sw);
console.log('El alto del screen es: '+sh);

var ah = screen.availHeight;
var aw = screen.availWidth;

console.log('-------------');
console.log('El ancho disponible es: '+ah);
console.log('El alto disponible es: '+aw);
console.log('-------------');

var lp = window.location.href;
console.log('Esta ubicado en: '+lp);

var lh = window.location.hostname;
console.log('Este es el host: '+lh);

var pt = window.location.protocol;
console.log('Es es el protocolo: '+pt);

//assign('ruta');

function nuevaVentana(){
  window.location.assign('https://www.reddit.com/');
}

//Historial

function goBack(){
  window.history.back();
}

function goForward(){
  window.history.forward();
}
