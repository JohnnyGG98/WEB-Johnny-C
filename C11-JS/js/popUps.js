function mostrarAlerta(){
  alert('Usando alertas');
}

function mostrarConfirmacion(){
  var res = window.confirm('¿Seguro que quiere ver el gif?');
  if(res){
    window.location.assign('https://i.imgur.com/NDrzHe3.gifv');
  }else{
    var h = document.createElement('h1');
    var c = document.createTextNode("Se perdio de ver un buen gif.")
    h.appendChild(c);
    document.getElementById('msg').appendChild(h);
    //document.body.appendChild(h);
  }
}

function pedirNombre(){
  var nombre = window.prompt('Ingrese su nombre!', 'SN');
  if(nombre != null && nombre != "" && nombre != 'SN'){
    var h = document.createElement('h1');
    var c = document.createTextNode("Hola: "+nombre)
    h.appendChild(c);
    document.getElementById('msg').appendChild(h);
  }
}
