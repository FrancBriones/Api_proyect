const express = require('express'); //Sintaxis de importacion Node
require('dotenv').config();
const {dbConection} = require('./Config/database');
const cors =require('cors');

//Crear el servidor express
const app=express();

//Configurar Cors
app.use(cors());

//Estableciendo conexion a la BD
dbConection();
//Rutas de la API proyecto
app.get('/',(req,res)=>{
    res.json({
        ok : true,
        msg : 'Bienvenido a Node.js'
    });
});

//Codigo para desplegar el servidor
app.listen(process.env.PORT,()=> {
    console.log('Servidor desplegado en el puerto:'+process.env.PORT);
})



