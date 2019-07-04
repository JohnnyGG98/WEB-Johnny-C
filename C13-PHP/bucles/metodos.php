<?php

  echo "<h1>Hola mundo</h1>";

 ?>

 <form action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
   <h3>Ingrese su nombre para saludarlo</h3>
   <label for="iNombre">
     Nombre
   </label>
   <input type="text" name="iNombre">
   <br>
   <input type="submit" value="Saludame">
 </form>

 <?php
 if($_SERVER['REQUEST_METHOD'] == 'POST'){
   $n = htmlspecialchars($_REQUEST['iNombre']);
   if(empty($n)){
     echo "<h2>No ingreso su nombre no podemos saludarlo -.-!</h2>";
   }else{
     echo "<h2>Hola $n</h2";
   }

   //Tambien podemos obtenerlo con la super global $_POST

   //Obtenemos los valores desde PHP
   //$_GET['key']

 }

  ?>
