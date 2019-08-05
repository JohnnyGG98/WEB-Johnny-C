<?php
  $titulo = 'CRUD-Listado';
  $lista = 'seleccionado';
  require_once '../vista/header.php';

  $heroes = array();

  if(isset($_POST['guardar'])){
    $nombre = $_POST['nombre'];
    $poder = $_POST['poder'];
    $ciudad = $_POST['ciudad'];

    $heroe = array(
      'nombre' => $nombre,
      'poder' => $poder,
      'ciudad' => $ciudad
    );

    array_push($heroes, $heroe);
  }

  require_once '../vista/lista.php';

  require_once '../vista/footer.php';

 ?>
