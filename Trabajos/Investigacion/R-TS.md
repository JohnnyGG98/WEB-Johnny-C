## Trabajo de Investigación

```json
{
  "Nombre": "Johnny García",
  "Curso": "M4A",
  "Fecha": "06/09/2019"
}
```

### React

**¿Qué es?**

En su página oficial podemos encontrar que es *“Una biblioteca de Javascript para construir interfaces de usuario”*.  Inicialmente fue una librería desarrollada por Facebook, debido a que tenían la necesidad de mejorar su FrontEnd.

Actualmente la librería es de código abierto y la implementan un sin número de grandes empresas, porque brinda un alto rendimiento al usar su **“Virtual DOM”**. El denominado **“Virtual DOM”** es una de las principales características de React, siendo el DOM típico de HTML pero en memoria.

**¿Cómo funciona?**

> Resumiendo de manera breve su funcionalidad, “ cuando actualizamos una vista React actualiza el DOM que está en memoria y lo compara con el DOM del navegador y ahi React sabe las partes específicas que debe actualizar ahorrando la necesidad de actualizar la vista entera.” (Miguel Angel Alvarez, 2019).

**¿Cuales son las principales ventajas de usarlo?**

El crear componentes encapsulados que manejan su propio comportamiento, vista y estado. Se puede integrar React en donde quieras esto lo convierte en una librería muy flexible, si necesitas React del lado del servidor se puede usar en NodeJs, y algo importante que mencionar es que únicamente se necesita saber Java Script para empezar a usarlo.

**¿Qué necesito para incorporar React en mi proyecto Web?**

```html
<script src="https://unpkg.com/react@16/umd/react.development.js"
crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
crossorigin></script>
```

### TypeScript

**¿Qué es?**

Es una mejora de Javascript, aportando tipos de datos, clases e interfaces. Surge por los problemas que presenta trabajar con Javascript puro en proyectos que son extensos.
Type Script está desarrollado por Microsoft, el proyecto fue lanzado en el 2012 y desde su llegada a contando con gran aceptación por parte de la comunidad de desarrolladores de todo el mundo, y se usan en proyectos como Angular y Vue.

**¿Cómo funciona?**

Todo el código que se escribe en Typescript, se compila a Javascript ya que los navegadores solo entiende Javascript.

**¿Cuales son las principales ventajas de usarlo?**

Una de sus principales ventajas y por las que se a vuelto muy popular, son los tipos de datos, al indicar a una variable su tipo de dato podemos tener acceso a sus métodos, y obtener un error si no se usa de forma correcta la variable.

Tenemos interfaces esto nos permite tipar nuestros objetos, y trabajar de una forma correcta.

**¿Qué necesito para incorporar TypeScript en mi proyecto Web?**


Se necesita tener instalado NodeJs y su administrador de paquetes npm, para poder instalarlo y utilizarlo.

Se instala de la siguiente manera:
```
npm install -g typescript
```
Para compilar el código se usa:
```
tsc helloworld.ts
```

##### Bibliografía

> Miguel Angel Alvarez (2019). desarrolloweb: Qué es React. Por qué usar React. Recuperado de https://desarrolloweb.com/articulos/que-es-react-motivos-uso.html
>
> César Alberca (2018). adictosaltrabajo: TypeScript VS JavaScript. Recuperado de https://www.adictosaltrabajo.com/2018/08/01/typescript-vs-javascript/
