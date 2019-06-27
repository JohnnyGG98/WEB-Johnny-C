var nombre = navigator.appName;
console.log('El nombre de la app es: '+nombre);

var code = navigator.appCodeName;
console.log('El codigo de la app es: '+code);

var producto = navigator.product;
console.log('El nombre del producto es: '+producto);

var maquina = navigator.userAgent;
console.log('Informacion de la compu del usuario: '+maquina);

var sis = navigator.platform;
console.log('Sistema operativo: '+sis);


function setCookie(nombre, valor, dias){
  var d = new Date();
  d.setTime(d.getTime() + (dias*24*60*60*1000));
  var expira = 'expira=' + d.toGMTString();
  document.cookie = nombre + "="+ valor + ";"+expira +";path=/";
}

function getCookie(nombre){
  var cnombre = nombre + "=";
  var dCookie = decodeURIComponent(document.cookie);
  var ca = dCookie.split(';');
  for(var i = 0; i < ca.length; i++){
    var c = ca[i];
    while(c.charAt(0) == ' '){
      c = c.substring(1);
    }

    if (c.indexOf(nombre) == 0){
      return c.substring(nombre.length, c.length);
    }
    return "";
  }
}

function checkCookie(){
  var user = getCookie('nombre');
  if(user != ""){
    alert("Bienvenido de nuevo "+user);
  }else{
    user = prompt('Ingrese su nombre', "");
    if(user != "" && user != null){
      setCookie("nombre", user, 150);
    }
  }
}
