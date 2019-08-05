<?php
  require_once '../utils/utils.php';
 ?>

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title><?php echo $titulo; ?></title>
    <link rel="stylesheet" href="<?php echo Utils::getPath(); ?>public/css/barra.css">
    <link rel="stylesheet" href="<?php echo Utils::getPath(); ?>public/css/main.css">
    <link rel="stylesheet" href="<?php echo Utils::getPath(); ?>public/css/bienvenido.css">
    <link rel="stylesheet" href="<?php echo Utils::getPath(); ?>public/css/formulario.css">
    <link rel="stylesheet" href="<?php echo Utils::getPath(); ?>public/css/tabla.css">
  </head>
  <body>

    <ul id="barra">
      <li class="opt-s"> <a class="<?php
        if(isset($ingresar)){
          echo $ingresar;
        }else{
          echo "";
        } ?>" href="<?php echo Utils::getPath(); ?>controlador/ingresar.php">Ingresar</a> </li>
      <li class="opt-i"> <a class="<?php
        if(isset($inicio)){
          echo $inicio;
        }else{
          echo "";
        } ?>" href="<?php echo Utils::getPath(); ?>">Inicio</a> </li>
      <li class="opt-s"> <a class="<?php
        if(isset($lista)){
          echo $lista;
        }else{
          echo "";
        } ?>" href="<?php echo Utils::getPath(); ?>controlador/lista.php">Lista</a> </li>
    </ul>
