let mysql = require('mysql')
let conexion = mysql.createConnection({
  host: 'localhost',
  database: 'crud-node',
  user: 'root',
  password: ''
})

conexion.connect(error => {
  if (error) {
    throw error
  } else {
    console.log('CONEXION EXITOSA')
  }
})

conexion.query("SELECT * FROM	usuarios", (err, filas) => {
    if (error) {
        throw error;
    }else{
        filas.forEach( fila => {
            console.log(filas);
        })
    }
})

conexion.end();
