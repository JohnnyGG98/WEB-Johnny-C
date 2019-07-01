<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Validando</title>
  </head>
  <body>

    <?php
    $palabras = 'HOLA MUNDO';

    ?>

    <button type="button" name="button" onclick="numPalabras()">Num Palabras</button>

  </body>

  <script type="text/javascript">
    function numPalabras(){
      console.log('CLick click')
      <?php
        echo "<script> alert('Hay '".$str_word_count($palabras)."' palabras'); </script>";
       ?>

    }
  </script>
</html>
