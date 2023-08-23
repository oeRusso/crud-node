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
conexion.query("SELECT * FROM	usuarios", (err, filas) => {
    if (err) {
        throw err;
    }else{
        filas.forEach( fila => {
            console.log(filas);
        })
    }
})

// INSERTAR

conexion.query("INSERT INTO usuarios (nombre,email,contraseña) VALUES ("Normar","Chavez","jeje123")";
conexion.end();
