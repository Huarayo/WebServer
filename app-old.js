const http = require("http");


http.createServer((req, res) => {

  // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
  // res.writeHead(200, { 'Content-Type': 'application/csv'});

  // //Escribrimos datos en el cuerpo de la respuesta
  // res.write( "id, nombre\n");
  // res.write( "1, Leonardo\n");
  // res.write("2, María\n");
  // res.write("3, Juan\n");
  // res.write("4, Pedro\n");
  // res.end();

  res.write("Hola mundo");
  res.end();

})
.listen( 8080);

console.log("Escuchando en el puerto 8080")