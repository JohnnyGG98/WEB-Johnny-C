function cambiaTitulo() {
  var nombre = document.getElementById("txtNombre").value;
  console.log(nombre);
  document.getElementById("saludo").innerHTML = "Hola, como estas "+nombre;
}

function redireccionar(){
  location.href="https://www.cartoonnetwork.es/";
}

function comprobarEdad(){
  var edad  = prompt('Ingrese su edad');
  if(edad >= 18){
    alert('Usted puede ver esta pagina');
  }else{
    redireccionar();
  }
}
