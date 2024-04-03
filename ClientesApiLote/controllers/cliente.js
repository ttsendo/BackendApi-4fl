const {response} = require('express');

Cliente = require('../models/cliente')

const getCliente = async(req, res) => {
    const clientes = await Cliente.find(); 
    res.json({
        msg: clientes
    })
}

const postCliente = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const cliente = new Cliente(datos) //Instanciar el objeto
        await cliente.save()//Guardar en la base de dato  
        console.log(cliente) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const mongoose = require('mongoose');
const putCliente = async(req, res) =>{
    const { id, nombre, apellido, email, telefono, ciudad, password} = req.body;
    try {
        const cliente = await Cliente.findOneAndUpdate(
            { id: id }, 
            { nombre, apellido, email, telefono, ciudad, password },
            { new: true }
        );
        if (!cliente) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.json({
            msg: 'Actualización exitosa',
            cliente: cliente
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al actualizar cliente' });
    }
}



const deleteCliente = async(req, res) =>{
    const { id } = req.params; 
    let mensaje = '';
    try {
        const cliente = await Cliente.findOneAndDelete({ id: id }); // Utiliza el ID para eliminar
        mensaje = 'Eliminación exitosa';
        res.json({
            msg: mensaje,
            cliente: cliente // Devuelve el documento eliminado
        });
    } catch (error) {
        console.log(error);
        mensaje = 'Error al eliminar clietne';
        res.status(500).json({ error: mensaje });
    }
    
}


module.exports = {
    getCliente,
    postCliente,
    putCliente,
    deleteCliente
}
