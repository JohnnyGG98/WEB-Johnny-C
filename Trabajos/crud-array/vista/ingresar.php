<div class="cont-form">
  <!-- ../modelo/heroe/guardar.php -->
  <form action="<?php $hr->guadar(); ?>" method="post"
  onsubmit="return validar();">
    <div class="row-form">
      <h2 class="tit-form">Creando un Super Heroe</h2>
    </div>
    <div class="row-form">
      <label class="lbl-row" for="nombre">Nombre</label>
      <input id="txtNombre" class="input-row"
       type="text" name="nombre" value="">
    </div>
    <div class="row-form">
      <label class="lbl-row" for="poder">Poder</label>
      <input id="txtPoder" class="input-row"
      type="text" name="poder" value="">
    </div>
    <div class="row-form">
      <label class="lbl-row" for="ciudad">Ciudad</label>
      <input id="txtCiudad" class="input-row"
      type="text" name="ciudad" value="">
    </div>
    <div class="row-form">
      <input class="btn-form" type="submit" value="Guardar Heroe" name="guardar">
    </div>
  </form>
</div>

<script>

var txtNombre = document.getElementById("txtNombre");
var txtPoder = document.getElementById("txtPoder");
var txtCiudad = document.getElementById("txtCiudad");

//Expresion regular
var regExpLetras = /^[a-zA-Z]+$/;
var valido = true;

validarLetras(txtNombre);
validarLetras(txtPoder);
validarLetras(txtCiudad);

function validarLetras(txt){
  txt.addEventListener("keyup", function(e){
    if (regExpLetras.test(txt)) {
      valido = true;
    } else {
      valido = false;
    }
  });
}

function estaVacio(valor){
  if(valor.length == 0){
    return true;
  }else{
    return false;
  }
}

function sonLetras(valor){
    return regExpLetras.test(valor);
}

function validar(){
  valido = !estaVacio(txtNombre.value);
  valido = !estaVacio(txtPoder.value);
  valido = !estaVacio(txtCiudad.value);

  //Validamos que sean solo letras
  valido = sonLetras(txtNombre.value);
  valido = sonLetras(txtPoder.value);
  valido = sonLetras(txtCiudad.value);

  return valido;

}
/**
txtNombre.addEventListener("keyup", function(e){
    /*console.log(e.key);
    console.log(regExpLetras.exec(txtNombre.value));
    console.log(txtNombre.value.match(regExpLetras));
    if(regExpLetras.test(txtNombre.value)){
      //console.log("Si ingreso solo letras "+txtNombre.value);
    }else{
      valido = false;
      //console.log("No ingreso letras.");
    }
});
*/

//Obtenemos ttodo el contenido del txt
//console.log(txtNombre.value);

</script>
