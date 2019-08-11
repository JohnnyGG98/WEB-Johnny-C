var iptsr = [];
var nameSelec = [];
var bl = 0;
var barra = document.getElementById('barra-form');

function obtenerInputsForm(){
  var is = document.getElementsByTagName('input');
  for (var i = 0; i < is.length; i++) {
    if(is[i].getAttribute('required') != null){
      agregarObligatorios(is[i]);
      agregaVal(is[i]);
    }else{
      if(is[i].type == 'checkbox'){
        is[i].addEventListener('change', function(){
          if(this.checked){
            console.log('Seleccionado');
          }else{
            console.log('Deseleccionado');
          }
        });
      }
    }
  }
}

function agregarObligatorios(input){
  let agrega = true;
  for (var i = 0; i < iptsr.length; i++) {
    if(
      iptsr[i].type == input.type &&
      iptsr[i].name == input.name
    ){
      agrega = false;
    }
  }
  if(agrega){
    iptsr.push(input);
  }
}

function quitarObligatorios(input){
  for (var i = 0; i < iptsr.length; i++) {
    if(
      iptsr[i].type == input.type &&
      iptsr[i].name == input.name
    ){
      iptsr.splice(i, 1);
      disminuirBarra();
    }
  }
}

function agregaVal(i){
  if(i.type == 'radio'){
    i.addEventListener('change', function(){
      if(i.checked){
        aumentarBarra();
      }else{
        console.log("No esta seleccionado: "+i.name);
        disminuirBarra();
      }
    });
  }else if(i.type == "text"){
    i.onblur =  function(){
      if(this.value.length > 0){
        aumentarBarra();
      }else{
        disminuirBarra();
      }
    }
  }else if(i.type == 'range'){
    i.addEventListener('change', function(){
      if(this.value > 0){
        aumentarBarra();
      }else{
        disminuirBarra();
      }
    });
  }

}

function aumentarBarra(){
  bl+= (1/iptsr.length * 100);
  barra.style.width = bl+'%';
}

function disminuirBarra(){
  bl-= (1/iptsr.length * 100);
  barra.style.width = bl+'%';
}

function agregarNombreRequerido(input){
  var agregar = true;
  for (var i = 0; i < nameSelec.length; i++) {
    if(nameSelec[i] == input.name){
      agregar = false;
    }
  }
  if(agregar){
    nameSelec.push(input.name);
  }
}
