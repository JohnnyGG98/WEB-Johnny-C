var myVar = setInterval(getHora, 1000);

function getHora(){
  var d = new Date();
  document.getElementById('relog').innerHTML = d.toLocaleTimeString();
}
