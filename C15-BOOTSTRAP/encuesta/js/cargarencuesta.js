//Obtenemos el documento
var rowencuesta = document.getElementById('verencuesta');
//Creamos el bloque de Formulario

function verEncuesta() {
  console.log('Veremos una encuesta');
  var pos = 100;
  for (var i = 0; i < encuestas.length; i++) {
    console.log('------------');
    console.log(encuestas[i]);
    agregarHTMLEncuesta(getTitulo(encuestas[i].encuesta));
    var prs = encuestas[i].preguntas;
    for (var j = 0; j < prs.length; j++) {
      //Aumentamos para id
      pos++;
      var pregunta = prs[j].pregunta;
      var rs = prs[j].respuestas;

      var htmlPRE = getPregunta(pregunta.pregunta);

      switch (pregunta.tipo) {
        case 'Si o no':
          htmlPRE += getSiNo('o'+pos, j);
          break;
        case 'Respuesta libre':
          htmlPRE += getLibre();
          break;
        case 'Rango':
          htmlPRE += getRango(rs[0], 'g'+pos);
          break;
        case 'Opcion multiple':
          htmlPRE += getCheckbox(rs[0], 'c'+pos);
          break;
        case 'Opcion simple':
          htmlPRE += getRapido(rs[0], 'r'+pos);
          break;
        default:

          break;
      }

      agregarHTMLEncuesta(htmlPRE += '</div>');
    }
  }
  console.log('<------------>');
}

function agregarHTMLEncuesta(html){
  rowencuesta.innerHTML += html;
}

function getTitulo(titulo){
  return `
  <div class="mx-auto text-center bg-dark">
    <h1 class="text-white py-2">` + titulo + `</h1>
  </div>
  `;
}

function getPregunta(pregunta){
  return `
  <div class="form-group pregunta">
    <label class="pre d-block">` + pregunta + `</label>
  `;
}

function getSiNo(name, i) {
  return `
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input res" value="Si" name="`+name+`"
    id="` + i + name + `" required>
    <label class="custom-control-label" for="` + i + name + i + `">Si</label>
  </div>
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input res" value="No" name="`+name+`"
    id="` + name + i + `" required>
    <label class="custom-control-label" for="` + name + i + `">No</label>
  </div>
  `;
}

function getLibre() {
  return `
  <input type="text" class="form-control res" placeholder="Ingrese una respuesta libre">
  `;
}

function getRango(pregunta, name) {
  return `
  <div class="range-field">
    <input type="range" class="custom-range res"  name="`+name+`" "
    max="` + pregunta.valormaximo + `"
    min="` + pregunta.valorminimo + `" value="0" required>
  </div>
  `;
}

function getRapido(res, name){
  var html = '';
  for (var i = 0; i < res.length; i++) {
    html += getInputRadio(res[i], name, i+name+i);
  }
  return html;
}

function getCheckbox(res, name){
  var html = '';
  for (var i = 0; i < res.length; i++) {
    html += getInputCheckbox(res[i], name, i+name+i);
  }
  return html;
}

function getInputRadio(res, name, id){
  return `
  <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input res" value="` + res +  `"
    name="` + name + `" required id="` + id + `">
    <label class="custom-control-label" for="` + id + `">` + res + `</label>
  </div>
  `;
}

function getInputCheckbox(res, name, id){
  return `
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input res" value="` + res + `"
    name="` + name + `" id="` + id + `">
    <label class="custom-control-label" for="` + id + `">` + res + `</label>
  </div>
  `;
}
