const {Schema, model, trusted} = require('mongoose')

const VentaSchema = ({
    id_venta:{
        type: String,
        unique:true,
        required:[true, 'El id es necesario']
    },

    nombre_producto:{
        type:String,
        unique: false,
        required:[true, 'El producto es requerido'],
    },

    precio_producto:{
        type:String,
        unique: true,
        required:[true, 'El precio es requerido'],
    },

})


module.exports = model('Venta', VentaSchema)