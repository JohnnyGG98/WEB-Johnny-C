function cambiaSubTitulo() {
    document.getElementById("subtitulo").innerHTML = "Cambiamos el sub titulo";
}

function cambiarFondo() {
    document.getElementById("fondo").style.background = "rgba(39, 60, 117, 0.5)";
}

var persona = {
  nombre: "John",
  apellido: "Garcia",
  nombreCompleto: function() {
    return this.nombre + " " + this.apellido;
  }
}
