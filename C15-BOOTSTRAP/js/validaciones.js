(function() {
  'use strict';
  window.addEventListener('load', function() {
    isAnonima();
    nombreSerie();
    obtenerInputsForm();
    eventoInputRange();
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

function validar(){
  let valido = true;
  valido = validarCbx();
    var ir = document.getElementById('icalificacion');
    var ec = document.getElementById('ecalificacion');
    if(ir.value > 0){
      ec.style.display = 'none';
    }else{
      ec.style.display = 'block';
      valido = false;
    }
  return valido;
}

function validarCbx(){
  var cbxs = document.getElementsByName("iserie");
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

function isAnonima(){
  var cbx = document.getElementById('ianonimo');
  var inom = document.getElementById('inombre');
  var iape = document.getElementById('iapellido');
  cbx.addEventListener('change', function(){
    if(this.checked){
      noRequeridoPorId('inombre');
      noRequeridoPorId('iapellido');
    }else{
      requeridoPorId('inombre');
      requeridoPorId('iapellido');
    }
  });
}

function requeridoPorId(id){
  var i = document.getElementById(id);
  i.setAttribute('required', '');

  agregarObligatorios(i);
}

function noRequeridoPorId(id){
  var i = document.getElementById(id);
  i.removeAttribute('required');

  quitarObligatorios(i);
}

function nombreSerie(){
  var isisf = document.getElementById('isiseriefavorita');
  var inosf = document.getElementById('inoseriefavorita');
  isisf.addEventListener('change', function(){
    if(this.select){
      muestraPorId('nombreseriefavorita');
      requeridoPorId('inombreseriefavorita');
    }
  });
  inosf.addEventListener('change', function(){
    if(this.select){
      ocultarPorId('nombreseriefavorita');
      noRequeridoPorId('inombreseriefavorita');
    }
  });
}

function muestraPorId(id){
  var inomsf = document.getElementById(id);
  inomsf.style.display = 'block';
}

function ocultarPorId(id){
  var inomsf = document.getElementById(id);
  inomsf.style.display = 'none';
}

function eventoInputRange(){
  var ir = document.getElementById('icalificacion');
  var tc = document.getElementById('tcalificacion');
  var ec = document.getElementById('ecalificacion');
  ir.addEventListener('input', function(){
    if(this.value > 0){
      tc.innerHTML = this.value;
      ec.style.display = 'none';
    }else{
      tc.innerHTML = '';
      ec.style.display = 'block';
    }
  });
}
