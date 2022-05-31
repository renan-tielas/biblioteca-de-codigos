// const mongoose = require('mongoose');
import mongoose from "mongoose";


const UsuarioSchema = new mongoose.Schema({
    nome: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    dataCriacao:{
        type: Date,
        default:new Date(),
    }
    // age: {
    //     required: true,
    //     type: Number
    // }
})

const Usuario = mongoose.model('Usuario',UsuarioSchema)


module.exports = Usuario
//qual