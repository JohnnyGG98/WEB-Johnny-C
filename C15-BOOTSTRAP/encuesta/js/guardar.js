console.log('Cargamos la pagina');
//Obtenemos el formulario
var frm = document.getElementById('crear-encuesta');
//Obtenemos el boton
var btn = document.getElementById('btn');
//Obtenemos el div en donde ingresaremos los mensajes
var alt = document.getElementById('alt');

//Aqui guardaremos las encuestas
var encuestas = [];
var preguntas = [];

var encuesta;
var pregunta;
var respuestas = [];

function guardar(){
  var txt = getValor();

  if(txt != ''){
    encuesta = txt;
    mostrarMensaje('Guardamos correctamente el nombre de la encuesta');
    frm.innerHTML = getFrmPregunta();
    btn.onclick = guardarPregunta;
    btn.innerHTML = 'Agregar pregunta a ' + encuesta;
  }else{
    mostrarError('Debe ingresar el nombre de la encuesta!');
  }
}

function guardarPregunta() {
  var txt = getValor();
  var tipo = document.getElementById('tipopregunta').value;
  var guardar = true;


  if(txt == ''){
    mostrarError('Debe ingresar la pregunta!');
    guardar = false;
  }

  if(tipo == 'Seleccione'){
    mostrarError('Debe seleccionar el tipo de pregunta!');
    guardar = false;
  }

  if(guardar){
    mostrarMensaje('Guardamos correctamente la pregunta!');
    pregunta = {
      pregunta: txt,
      tipo: tipo
    }
    
    frm.innerHTML = getFrmRespuesta(pregunta.pregunta);
    //Agregamos las respuestas
    agregarRespuestas();

    btn.onclick = guardarRespuesta;
    btn.innerHTML = 'Guardar respuesta';
    respuestas = [];
  }
}

function agregarRespuestas(){
  console.log('El tipo de pregunta es: '+pregunta.tipo);
  switch (pregunta.tipo) {
    case 'Opcion multiple':
      agregarFrmOpciones();
      break;
    case 'Opcion simple':
      agregarFrmOpciones();
      break;
    case 'Rango':
      agregarFrmRango();
      break;
    default:
    console.log('No entramos en ningun tipo de pregunta');
      break;
  }
}

function guardarRespuesta() {

  var respuesta;

  switch (pregunta.tipo) {
    case 'Si o no':
      respuesta = ['Si', 'No'];
      break;
    case 'Respuesta libre':
      respuesta = {
        valor: ''
      }
      break;
    case 'Rango':
      respuesta = {
        valorminimo: getValorPorId('min'),
        valormaximo: getValorPorId('max')
      }
      break;
    default:
      var res = document.getElementsByClassName('res');
      respuesta = [];
      for (var i = 0; i < res.length; i++) {
        if(res[i].value != ''){
            respuesta.push(res[i].value);
            console.log('Respuesta: '+res[i].value);
        }
      }
      break;
  }

  respuestas.push(respuesta);

  //Aqui guardamos la encuesta
  var pre = {
    pregunta: pregunta,
    respuestas: respuestas
  }
  //Guardamos las preguntas
  preguntas.push(pre);
  mostrarMensaje('Guardamos correctamente respuestas de: <stronge> '
  + pregunta.pregunta + '</stronge>');
  //Receteamos
  pregunta = null;
  frm.innerHTML = getFrmPregunta();
  btn.onclick = guardarPregunta;
  btn.innerHTML = 'Agregar pregunta a ' + encuesta;
}

//Guardamos la encuesta
function guardarEncuesta(){
  var ec = {
    encuesta: encuesta,
    preguntas: preguntas
  }
  encuestas.push(ec);

  mostrarMensaje('Guardamos correctamente la encuesta '+encuesta);
  frm.innerHTML = getFrmEncuesta();
  btn.onclick = guardar;
  btn.innerHTML = 'Guardar Encuesta';
  encuesta = null;
}

function getValor(){
  return document.getElementById('txt').value;
}

function getValorPorId(id){
  return document.getElementById(id).value;
}

//Formulario para opciones
function agregarFrmOpciones(){
  var frmResp = document.getElementById('respuestas');
  frmResp.innerHTML += `
    <button class="btn btn-success btn-sm d-block mb-3" onclick="agregarOpcion()">Agregar otra respuesta</button>
  ` + getInputOpt();
}

//Formulario para rango
function agregarFrmRango(){
  var frmResp = document.getElementById('respuestas');
  frmResp.innerHTML = `
  <div class="form-row my-2">
    <div class="col">
      <label for="txtMin">Valor maximo:</label>
      <input type="text" class="form-control" id="min" name="txtMin" placeholder="Ingrese el valor maximo" required>
    </div>
    <div class="col">
      <label for="txtMax">Valor minimo:</label>
      <input type="text" class="form-control" id="max" name="txtMax" placeholder="Ingrese el valor minimo" required>
    </div>
  </div>
  `;
}

//Agregar opcion
function agregarOpcion(){
  var frmResp = document.getElementById('respuestas');

  //frmResp.innerHTML += getInputOpt();
  var d = document.createElement('div');
  var i = document.createElement('input');
  i.type = 'text';
  d.classList.add('form-group');
  i.classList.add('form-control', 'res');
  i.placeholder = 'Ingrese una respuesta'
  d.appendChild(i);

  frmResp.appendChild(d);
}

//Formulario pregunta libre
function getInputOpt(){
  return `
  <div class="form-group">
    <input type="text" class="form-control res" placeholder="Ingrese una respuesta" required>
  </div>
  `;
}

//Formulario de la respuesta
function getFrmRespuesta(pregunta){
  var html = `
  <div class="badge badge-dark w-100 my-3 text-white text-center ">
    <h3 class=" my-2  text-wrap">
      ` + pregunta + `
    </h3>
  </div>
  <div class="my-2" id="respuestas">
  </div>
  `;

  return html;
}

//El formulario de pregunta
function getFrmPregunta() {

  html = `
  <div class="form-group">
    <span class="badge badge-danger">Requerido</span>
    <label for="txtnomencuesta" class="pre d-block">Nombre de la pregunta:</label>
    <input type="text" id="txt" class="form-control" name="txtnomencuesta" placeholder="Ingrese la pregunta." required>
    <div class="invalid-feedback">
      Debe ingresar su pregunta
    </div>
  </div>
  <div class="form-group">
    <label for="tipopregunta">Seleccione el tipo de pregunta que sera.</label>
    <select class="form-control" id="tipopregunta">
      <option>Seleccione</option>
      <option>Si o no</option>
      <option>Respuesta libre</option>
      <option>Opcion multiple</option>
      <option>Opcion simple</option>
      <option>Rango</option>
    </select>
  </div>
  `;

  if(preguntas.length >= 2){
    html += `
    <div class="my-2 mx-5">
      <button class="btn btn-success btn-block" onclick="guardarEncuesta()"> Terminar encuesta </button>
    </div>
    `;
  }

  return html;
}

function getFrmEncuesta(){
  return `
  <div class="form-group">
    <span class="badge badge-danger">Requerido</span>
    <label for="txtnomencuesta" class="pre d-block">Nombre de la encuesta:</label>
    <input type="text" id="txt" class="form-control" name="txtnomencuesta" placeholder="Ingrese el nombre de la encuesta." required>
    <div class="invalid-feedback">
      Debe ingresar el nombre de la encuesta.
    </div>
  </div>
  `;
}

//Mensaje cuando ocurre un error
function mostrarError(error){
  var html = `
  <div class="alert alert-danger alert-dismissible fade show" role="alert">
  `
  + error +
  `
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  `;
  alt.innerHTML = html;
}

//Mensaje de informacion al guardar
function mostrarMensaje(msg){
  html =  `
  <div class="alert alert-success alert-dismissible fade show" role="alert">
  `
  + msg +
  `
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  `;
  alt.innerHTML = html;
}
