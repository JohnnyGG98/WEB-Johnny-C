<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

    <h2>Con este formulario usamos el metodo POST</h2>
    <form  action="saludaPOST.php" method="post">
      <label for="nombre">Nombre</label>
      <input type="text" name="nombre" value="">
      <label for="correo">Correo</label>
      <input type="text" name="correo" value="">
      <input type="submit" value="Ingresar">
    </form>

    <h2>Con este formulario usamos el metodo GET</h2>
    <form  action="saludaGET.php" method="get">
      <label for="nombre">Nombre</label>
      <input type="text" name="nombre" value="">
      <label for="correo">Correo</label>
      <input type="text" name="correo" value="">
      <input type="submit" value="Ingresar">
    </form>

    <h2>Validando el formulario</h2>
    <form action="valida.php" method="post">
      <label for="nombre">Nombre</label>
      <input type="text" name="nombre" value="">
      <input type="submit" value="Validar">

    </form>


  </body>
</html>
