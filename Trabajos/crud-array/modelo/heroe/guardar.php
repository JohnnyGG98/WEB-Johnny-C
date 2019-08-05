<?php
  if(isset($_POST['guardar'])){
    $nombre = $_POST['nombre'];
    $poder = $_POST['poder'];
    $ciudad = $_POST['ciudad'];

    $nombre = formatearInput($nombre);
    $poder = formatearInput($poder);
    $ciudad = formatearInput($ciudad);

    $heroe = array(
      'nombre' => $nombre,
      'poder' => $poder,
      'ciudad' => $ciudad
    );

    $heroes = array();

    if(isset($_COOKIE['heroes'])){
      $heroes = unserialize($_COOKIE['heroes']);
    }

    array_push($heroes, $heroe);
    setcookie('heroes', serialize($heroes), time()+360, '/');

    header('location: ../../controlador/lista.php');
  }

  function formatearInput($input){
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input);
    return $input;
  }

 ?>
