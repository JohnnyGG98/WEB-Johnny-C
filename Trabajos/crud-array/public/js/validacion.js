var txtNombre = document.getElementById("#txtNombre");

var nombre = txtNombre.textContent(); 
console.log(nombre);

nombre.addEventListener("keyup", function(e){
    console.log(e);
});
