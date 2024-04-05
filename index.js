const server = require("./app");
const PORT = 3001;
const { conn } = require("./DB_connection")

//* Sincronizar la instancia "sequelize" al servidor
conn.sync({ force: true }) //* Retorna una promesa
.then(()=>{
   server.listen(PORT, () => {
      console.log('Server raised in port: ' + PORT);
   });
})
.catch(error => console.log(error.message))
