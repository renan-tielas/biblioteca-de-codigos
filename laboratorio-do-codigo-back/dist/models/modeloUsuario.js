"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const mongoose = require('mongoose');
const mongoose_1 = __importDefault(require("mongoose"));
const UsuarioSchema = new mongoose_1.default.Schema({
    nome: {
        required: true,
        type: String
    },
    dataCriacao: {
        type: Date,
        default: new Date(),
    }
    // age: {
    //     required: true,
    //     type: Number
    // }
});
const Usuario = mongoose_1.default.model('Usuario', UsuarioSchema);
module.exports = Usuario;
//qual
