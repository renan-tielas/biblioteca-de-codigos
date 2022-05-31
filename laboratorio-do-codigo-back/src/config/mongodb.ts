// const mongoose = require('mongoose'); // usado para conectar
require('dotenv').config();
import mongoose from "mongoose";

const mongoString = process.env.DATABASE_URL;
// const mongodb= config.get('mongoURI')
   
const connectDB = async () => {

try{

    await mongoose.connect(mongoString, {
        // useNewUrlParser: true,
        // useUnifiedTopology :true,
        // useCreateIndex: true,
        // useFindAndModify: false
    }); // nos da uma promessa

    console.log('MongoDb conectou ...');

}

catch(err:any){
console.error(err.message);
//sair do processo caso falhe
process.exit(1);

}
}

module.exports = connectDB;