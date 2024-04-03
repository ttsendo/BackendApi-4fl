const {response} = require('express');

Venta = require('../models/venta')

const getVenta = async(req, res) => {
    const ventas = await Venta.find(); 
    res.json({
        msg: ventas
    })
}

const postVenta = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const venta = new Venta(datos) //Instanciar el objeto
        await venta.save()//Guardar en la base de dato  
        console.log(venta) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const mongoose = require('mongoose');
const putVenta = async(req, res) =>{
    const { id_venta, nombre_producto, precio_producto} = req.body;
    try {
        const venta = await Venta.findOneAndUpdate(
            { id_venta: id_venta }, 
            { nombre_producto, precio_producto},
            { new: true }
        );
        if (!venta) {
            return res.status(404).json({ error: 'Venta no encontrada' });
        }
        res.json({
            msg: 'Actualización exitosa',
            venta: venta
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al actualizar la Venta' });
    }
}



const deleteVenta = async(req, res) =>{
    const { id_venta } = req.params; 
    let mensaje = '';
    try {
        const venta = await Venta.findOneAndDelete({ id_venta: id_venta }); // Utiliza el ID para eliminar
        mensaje = 'Eliminación exitosa';
        res.json({
            msg: mensaje,
            venta: venta // Devuelve el documento eliminado
        });
    } catch (error) {
        console.log(error);
        mensaje = 'Error al eliminar Venta';
        res.status(500).json({ error: mensaje });
    }
    
}


module.exports = {
    getVenta,
    postVenta,
    putVenta,
    deleteVenta
}