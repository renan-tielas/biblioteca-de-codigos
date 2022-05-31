"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const mongoose = require('mongoose');
// const express = require('express');
const rotas = require('./rotas/rotas');
const app = (0, express_1.default)();
app.listen(3001, () => {
    console.log(`Server Started at ${3001}`);
});
app.use('/api', rotas);
// app.use(express.json());
// PORTA 3000 OU 3001
