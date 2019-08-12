//Modelo de persona
/*var persona = {
  nombre:
  apellido:
}*/
function guardarFrm(){
  if(validar()){
    var rform = [];
    var preg;
    var rpts = [];

    //Obtenemos todas las preguntas
    var preguntas = document.getElementsByClassName('pregunta');
    console.log('Tenemos estas preguntas: '+preguntas.length);

    for (var i = 0; i < preguntas.length; i++) {
      var pres = preguntas[i].getElementsByClassName('pre');
      var resp = preguntas[i].getElementsByClassName('res');
      for (var j = 0; j < pres.length; j++) {

        preg = pres[j].innerHTML;
        rpts = [];
      }

      for (var k = 0; k < resp.length; k++) {
        if(resp[k].type == 'text' || resp[k].type == 'range'){
          rpts.push(resp[k].value);
        }else{
          if(resp[k].checked){
            rpts.push(resp[k].value);
          }
        }
      }

      var rppp = {
        pregunta: preg,
        respuesta: rpts
      };
      rform.push(rppp);
    }

    var pnom = document.getElementById('inombre').value;
    var pape = document.getElementById('iapellido').value;

    var persona = {
      nombre: 'Anonimo',
      apellido: ''
    }

    if(pnom != '' && pape != ''){
      persona = {
        nombre: pnom,
        apellido: pape
      }
    }

    localStorage.setItem("nombre", document.getElementById('inombre').value);
    localStorage.setItem("persona", JSON.stringify(persona));

    //Aqui guardamos la encuesta de una persona
    var eper = {
      persona: persona,
      respuestas: rform
    }

    //En respuestas tenemos datos

    // leer datos
    /*var rts = localStorage.getItem("respuestas");
    var encuesta = [];
    if(rts != null){
      //console.log('No existen respuestas de este formulario');
      lencuesta = localStorage.getItem("respuestas");
      encuesta = JSON.parse(lencuesta);
    }
    console.log('Tenemos '+rform.length+' respuestas en el formaulario');
    encuesta.push(rform);
    console.log('Tenemos tantas encuestas respondidas: '+encuesta.length);
    localStorage.setItem("respuestas", JSON.stringify(encuesta));*/

    var rts = localStorage.getItem("encuestas");
    var encuesta = [];
    if(rts != null){
      //console.log('No existen respuestas de este formulario');
      lencuesta = localStorage.getItem("encuestas");
      encuesta = JSON.parse(lencuesta);
    }
    console.log('Tenemos '+rform.length+' respuestas en el formaulario');
    encuesta.push(eper);
    console.log('Tenemos tantas encuestas respondidas: '+encuesta.length);
    localStorage.setItem("encuestas", JSON.stringify(encuesta));

    demo();
  }
}

function sleep(milliseconds) {
 var start = new Date().getTime();
 for (var i = 0; i < 1e7; i++) {
  if ((new Date().getTime() - start) > milliseconds) {
   break;
  }
 }
}

function demo() {
  console.log('Taking a break...');
  sleep(1000);
  console.log('Two second later');
}
