<?php

  function contar($limite){
    echo "Contaremos hasta ".($limite - 1)."<br>";
    for ($i=0; $i < $limite; $i++) {
      echo "$i<br>";
    }
  }

  contar(10);

  $a = array(
    'uno' => 1,
    'dos' => 2,
    'tres' => 3,
    'cuatro' => 4
  );

  echo "<hr>";
  echo "<h1>Un bucle con foreach</h1>";
  foreach ($a as $key => $value) {
    echo "Llave: $key <br>";
    echo "Valor: $value <br>";
  }

  echo "<hr>";
  echo "<h1>Un array mutidimencional</h1>";

  $ad = array(
    'uno' => array(
      'nombre' => 'Johnny',
      'apellido' => 'Garcia',
    ),
    'dos' => array(
      'nombre' => 'Edisson',
      'apellido' => 'Garcia',
    ),
  );


    echo '<table border="1">';
    foreach ($ad as $key => $value) {
      //var_dump($ad[$key]);
      //echo "<hr>";
      echo "<tr>";
      foreach ($ad[$key] as $key2 => $value2) {
        //var_dump($ad[$key][$key2]);
        //echo "<hr>";
        echo "<th>".$ad[$key][$key2]."</th>";
      }
      echo "</tr>";
    }
    echo "</table>";

    echo "<hr>";



  //No funciona
  /*for ($i=0; $i < sizeof($ad); $i++) {
    var_dump($ad[$i]);
    for ($j=0; $j < sizeof($ad[$i]); $j++) {
      echo "$ad[$i][$j]<br>";
    }
  }*/

  foreach ($ad as $key => $value) {
    var_dump($ad[$key]);
    echo "<br>";
  }

  $aedad = array(
    'Pepe' => 62 ,
    'Juan' => 41,
    'Ed' => 45,
    'Frank' => 25
  );


  function imprimirArray($a){
    foreach ($a as $key => $value) {
      echo $key." => ".$a[$key];
      echo "<br>";
    }
  }

  //En un array ordenamos por valor
  echo "Ordenando con el valor<br>";
  asort($aedad);
  imprimirArray($aedad);
  //En un array ordenamos por la clave
  echo "Ordenando con la clave<br>";
  ksort($aedad);
  imprimirArray($aedad);

  $dir = $_SERVER['PHP_SELF'];
  echo "$dir";

  echo "<a href=\"/bucles/metodos.php\">Ir a metodos</a>";
 ?>
