(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

function guardar(){
  if(validarFrm()){
    console.log('Todo bien todo correcto');
  }else{
    console.log('No es valido');
  }
}

function validarFrm(){
  var valido = true;
  var resp = document.getElementsByClassName('res');
  for (var i = 0; i < resp.length; i++) {
    if(resp[i].type == 'checkbox'){
      valido = validarCbx(resp[i].name);
    }else if(resp[i].type == 'text'){
      if(resp[i].value == ''){
        valido = false;
      }
    }else if(resp[i].type == 'range'){
      if(resp[i].value == '0'){
        valido = false;
      }
    }
  }
  return valido;
}

function validarCbx(name) {
  var cbxs = document.getElementsByName(name);
  var nums = 0;
  for (var i = 0; i < cbxs.length; i++) {
    if(cbxs[i].type == "checkbox"){
      if(cbxs[i].checked === true){
        nums++;
      }
    }
  }

  if(nums === 0){
    for (var i = 0; i < cbxs.length; i++) {
      cbxs[i].setAttribute('required', '');
    }
    //No selecciono ninguno
    return false;
  }else{
    for (var i = 0; i < cbxs.length; i++) {
      cbxs[i].removeAttribute('required');
    }
    //Todo esta correcto
    return true;
  }
}
