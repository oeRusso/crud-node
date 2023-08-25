let mysql = require('mysql')
let conexion = mysql.createConnection({
  host: 'localhost',
  database: 'crud-node',
  user: 'root',
  password: ''
})

conexion.connect(err => {
  if (err) {
    throw err
  } else {
    console.log('CONEXION EXITOSA')
  }
})

// MOSTRAR
conexion.query('SELECT * FROM	usuarios', (err, filas) => {
  if (err) {
    throw err
  } else {
    filas.forEach(fila => {
      console.log(filas)
    })
  }
})

// INSERTAR

/* conexion.query("INSERT INTO usuarios (nombre,email,contraseña) VALUES ('Normar','Chavez','jeje123')",(err,result)=>{

if(err) throw err;
console.log('Registro agregado',result);
}); */

// EDITAR
// conexion.query("UPDATE  usuarios SET nombre='cesar',email='asdasdaqgamil.com', contraseña='barnis' WHERE id=5",(err,result)=>{
//   if(err) throw err;
//   console.log('Registro actualizado',result);
// });

// ELIMINAR
conexion.query('DELETE FROM usuarios WHERE id=1', (err, result) => {
  if (err) throw err
  console.log('Registro eliminado', result)
})

conexion.end()
