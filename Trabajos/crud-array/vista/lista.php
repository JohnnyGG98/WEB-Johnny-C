<div class="cont-table">

  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Poder</th>
        <th>Ciudad</th>
        <th>Accion</th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td>Batman</td>
        <td>Dinero</td>
        <td>Gotica</td>
        <td>-</td>
      </tr>

      <?php
      if(isset($_COOKIE['heroes'])){
        $heroes = unserialize($_COOKIE['heroes']);
        llenarTbl($heroes);
      }else{
        llenarTbl($heroes);
      }

      function llenarTbl($heroes){
        foreach ($heroes as $key => $value) {
          echo "<tr>";
          foreach ($heroes[$key] as $key2 => $value2) {
            echo "<td>$value2</td>";
          }
          echo "<td> <a href=\"../modelo/heroe/eliminar.php?key=$key\">
          Eliminar
          </a> </td>";
          echo "</tr>";
        }
      }

      function eliminarHeroe($key){
        unset($heroes[$key]);
      }
      ?>

    </tbody>
  </table>

</div>
