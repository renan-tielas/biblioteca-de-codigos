// const mongoose = require('mongoose');
import { url } from "inspector";
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

const CodigoSchema = new mongoose.Schema({
    titulo: {
        required: true,
        type: String
    },
    descricao: {
        required: true,
        type: String
    },
    link: {
        required: false,
        type: String,
    },
    conteudo: {
        required: true,
        type: String
    },
    codigo: {
        required: false,
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
const Codigo = mongoose.model('Codigo',CodigoSchema)

module.exports = {Usuario,Codigo}
//qual