import Client from "../../../Models/Client"
import dbConnection from "../../../services/dbConnection"
import { Request, Response, NextFunction } from 'express';

dbConnection();

export default async function handler(req: Request,res: Response){
const {method} = req;

switch(method){
    case "GET":
        try{
            const clients = await Client.find({});
            res.status(200).json({
                success:true,
                data:clients,
            }); }
            catch (error){
                console.log(error);
                res.status(500).json({success:false,error})
            }
}
}