"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const mongoose = require('mongoose'); // usado para conectar
require('dotenv').config();
const mongoose_1 = __importDefault(require("mongoose"));
const mongoString = process.env.DATABASE_URL;
// const mongodb= config.get('mongoURI')
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(mongoString, {
        // useNewUrlParser: true,
        // useUnifiedTopology :true,
        // useCreateIndex: true,
        // useFindAndModify: false
        }); // nos da uma promessa
        console.log('MongoDb conectou ...');
    }
    catch (err) {
        console.error(err.message);
        //sair do processo caso falhe
        process.exit(1);
    }
});
module.exports = connectDB;
