const express = require('express'); //Sintaxis de importacion Node
require('dotenv').config();
const {dbConection} = require('./Config/database');
const cors =require('cors');

//Crear el servidor express
const app=express();

//Configurar Cors
app.use(cors());
app.use(express.json());

//Estableciendo conexion a la BD
dbConection();
//Rutas de la API proyecto
app.use('/api/usuarios', require('./routes/usuarios.routes'));
app.use('/api/login', require('./routes/auth.routes')); 
//Codigo para desplegar el servidor
app.listen(process.env.PORT,()=> {
    console.log('Servidor desplegado en el puerto:'+process.env.PORT);
})



