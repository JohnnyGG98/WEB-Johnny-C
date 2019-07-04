<?php

if($_SERVER['REQUEST_METHOD'] == 'POST'){
  //$name = valida($_POST['nombre']);
  $name = $_POST['nombre'];

  echo "<hr>";
  echo "$name";
  echo "<hr>";
}


function valida($valor){
  $valor = trim($valor);
  $valor = stripslashes($valor);
  $valor = htmlspecialchars($valor);
  return $valor;
}

?>
