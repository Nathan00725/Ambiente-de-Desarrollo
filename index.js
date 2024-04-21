//Crear el Import de la libreria Express atraves de node.js
import express from "express";
const app = express();
//Con esto ya tenemos el Exprees listo para funcionar
//Se hara una prueba para ver si funciona

const port = 10000;
//Con este puerto veremos si se lee en la consola

app.listen(port, ()=>{

    console.log(`Escuchando en el puerto ${port} `);


});

//Con este codigo podemos ver 2 cosas, la importacion de la libreria Express
//Y vemos como ver el la consola como usar el Npm de node

//Para que funcione se debe poner npm run dev
//Y con eso tenemos arriba un sistema listo para funcionar y los cambios.

/*Este ejemplo solo era para ver la funcionabilidad del node
con el npm run dev, y ver arriba un sistema,
el Express solo queda listo para mas adelante por si necesita

Con el Start seria lo mismo se escribe el npm Start e igual se podra ver el proyecto arriba


Gracias esta fue mi tarea y tambien deje una calculadora jaja*/