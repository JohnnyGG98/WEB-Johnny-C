<?php
  $titulo = 'CRUD-Listado';
  $ingresar = 'seleccionado';

  require_once '../modelo/heroe/Heroe.php';

  $hr = new Heroe();
  require_once '../vista/header.php';

  require_once '../vista/ingresar.php';

  require_once '../vista/footer.php';
 ?>
