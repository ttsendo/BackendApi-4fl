const {Router} = require('express')

const route = Router()


//Listar todos los datos
//Importando el controlador
const { getCliente, postCliente, putCliente, deleteCliente } = require('../controllers/cliente')


route.get('/', getCliente)

route.post('/', postCliente)

route.put('/:id', putCliente)

route.delete('/:id', deleteCliente)



module.exports = route 