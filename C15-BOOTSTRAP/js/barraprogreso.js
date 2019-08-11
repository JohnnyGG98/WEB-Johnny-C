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
  if(i.type == 'checkbox' || i.type == 'radio'){
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
      }
    }
  }
}

function aumentarBarra(){
  bl+= (1/iptsr.length * 100);
  barra.style.width = bl+'%';
}

function disminuirBarra(){
  bl-= (1/iptsr.length * 100);
  barra.style.width = bl+'%';
  console.log('Quitamos');
}
