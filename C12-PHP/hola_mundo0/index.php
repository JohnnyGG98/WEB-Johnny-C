<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Probando php</title>
  </head>
  <body>
    <?php
      echo "<h1>Hola mundo</h1>";
      //Variables en PHP
      $nombre = 'Verde';
      echo "<h4>$nombre</h4>";
      echo '<h4>$nombre</h4>';

      $x = 5;
      $y = 10;
      function testSum(){
        //Asi llamamos a las variables locales
        global $x, $y;
        echo "<h1>". $x+$y ."</h1>";
      }

      echo "<hr>";
      function testStatic(){
        static $f = 0;
        echo "$f<br>";
        $f++;
      }

      testStatic();
      testStatic();
      testStatic();
      echo "<hr>";

      echo "Inicio " . (5 + 11) . " fin";
      echo "Inicio " . 5 + 11 . " fin";

      echo "<hr>";
      print "Hola mundo desde un print";

      echo "<hr>";
      var_dump($x);

      $array = ['Toyota', 'BMW'];
      var_dump($array);


      echo "<hr>";
      class Car {
        function Car() {
          $this->model = 'BMW';
          echo "Constructor";
        }
      }

      $car = new Car();

      echo $car->model;

      echo "<hr>";

      //str_word_count nos devuelve el numero de palabras

      //strpos nos muestra donde comienza una cadena

      //str_replace("word", 'dolly', "hello word");


     ?>
  </body>
</html>
