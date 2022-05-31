// import express from 'express';
const express = require('express');
import mongoose from 'mongoose';
// import dbConnection from '../config/dbConnection';

const dbConnection = require('./config/dbConnection')
const connectDB = require('./config/mongodb')
import { Router, Request, Response } from 'express';
// const mongoose = require('mongoose');
// const express = require('express');
const rotas = require('./rotas/rotas');

// dbConnection()
connectDB()
const app = express();


app.use(express.json({extended:false}));
//permite usar os dados em request.body

app.use('/api', rotas)
// app.use(express.json());


app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})


// PORTA 3000 OU 3001