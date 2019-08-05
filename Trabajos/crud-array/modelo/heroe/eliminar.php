<?php
if(isset($_GET['key'])){
  $key = $_GET['key'];

  if(isset($_COOKIE['heroes'])){
    $heroes = unserialize($_COOKIE['heroes']);
    unset($heroes[$key]);
    //Movemos todo a las posiciones que corresponden
    $heroes = array_values($heroes);
    setcookie('heroes', serialize($heroes), time()+360, '/');

    header('location: ../../controlador/lista.php');
  } else {
    header('location: ../../controlador/inicio.php');
  }
}

 ?>
