const {Schema, model, trusted} = require('mongoose')

const ClienteSchema = ({
    id:{
        type: String,
        unique:true,
        required:[true, 'El id es necesario']
    },

    nombre:{
        type:String,
        unique: false,
        required:[true, 'El nombre es requerido'],
    },

    apellido:{
        type:String,
        unique: true,
        required:[true, 'El apellido es necesario'],
    },

    email:{
        type:String,
        unique: false,
        required:[true, 'El email es necesario'],
    },

    telefono:{
        type:Number,
        unique: false,
        required:[true, 'El telefono es necesario'],
    },

     ciudad:{
        type:String,
        unique: false,
        required:[true, 'La Ciudad es necesaria'],
    },

    password:{
        type:String,
        unique: false,
        required:[true, 'La contraseña es necesaria'],
    },

})


module.exports = model('Cliente', ClienteSchema)
