const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getVenta, postVenta, putVenta, deleteVenta } = require('../controllers/venta')


route.get('/', getVenta)

route.post('/', postVenta)

route.put('/:id_venta', putVenta)

route.delete('/:id_venta', deleteVenta)



module.exports = route 