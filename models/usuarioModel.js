const {Schema, model} = require('mongoose');
//Definicion del esquema para la coleccion de Usuario
const UsuarioSchema = Schema({
    nombre:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,   
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    img:{
        type: String
    },
    role:{
        type: String,
        require: true,
        default: 'USER_ROLE'
    },
    google:{
        type: Boolean,
        default: false  
    },
});

//Para evitar devolver la contraseña por razones de seguridad
UsuarioSchema.method('toJSON', function(){
    const {__v, _id,password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})


//Se exporta el modelo
//Por defecto moongose creara en mongodb un documento en plural: usuarios
module.exports = model ('Usuario', UsuarioSchema);