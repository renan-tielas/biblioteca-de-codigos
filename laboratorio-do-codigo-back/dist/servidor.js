"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import express from 'express';
const express = require('express');
// import dbConnection from '../config/dbConnection';
const dbConnection = require('./config/dbConnection');
const connectDB = require('./config/mongodb');
// const mongoose = require('mongoose');
// const express = require('express');
const rotas = require('./rotas/rotas');
// dbConnection()
connectDB();
const app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json({ extended: false }));
//permite usar os dados em request.body
app.use('/api', rotas);
// app.use(express.json());
app.listen(3001, () => {
    console.log(`Server Started at ${3001}`);
});
// PORTA 3000 OU 3001
