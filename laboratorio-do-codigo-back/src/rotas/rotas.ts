const express = require('express');
const Usuario = require('../models/modeloUsuario');
const router = express.Router()
// import express from 'express';
// import mongoose from 'mongoose';
import { Router, Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';



//Post Method
router.post('/post', async (req: Request, res: Response)=> {
   
    
    try {
        const usuario = new Usuario({
            nome: req.body.nome,
            dataCriacao: req.body.dataCriacao           // age: req.body.age
        })
        const dataToSave = usuario.save();
        res.status(200).send(usuario).json(dataToSave)
        // res.status(200).json(dataToSave)
    }

    catch(err:any){
        console.error(err.message);
        res.status(500).send('Erro no servidor')
    
    }
    // catch (err:any) {
    //     let errorMessage = "Failed to do something exceptional";
    //     if (err instanceof Error) {
    //     err.message =  errorMessage ;
    //       }
          
    //     res.status(400).json({message: err.message})
    //     throw new Error(err);
        
    // }
})



// const addPost = async (req: Request, res: Response, next: NextFunction) => {
//     // get the data from req.body
//     let title: string = req.body.title;
//     let body: string = req.body.body;
//     // add the post
//     let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
//         title,
//         body
//     });
//     // return response
//     return res.status(200).json({
//         message: response.data
//     });
// };

//Get all Method
router.get('/pegaUsuarios', async (req: Request, res: Response) => {
    
try {
    const usuarios = await Usuario.find({})
    res.status(200).json({success:true, data:usuarios})
}
catch (err:any) {
    let errorMessage = "Failed to do something exceptional";
    if (err instanceof Error) {
    err.message =  errorMessage ;
      }
      
    res.status(400).json({message: err.message})
    throw new Error(err);
    
}
  
})

//Get by ID Method
router.get('/getOne/:id',  (req: Request, res: Response)=> {
   

       
try {
    res.send(req.params.id)

}
catch (err:any) {
    let errorMessage = "Failed to do something exceptional";
    if (err instanceof Error) {
    err.message =  errorMessage ;
      }
      
    res.status(400).json({message: err.message})
    throw new Error(err);
    
}

})

//Update by ID Method
router.patch('/update/:id',  (req: Request, res: Response) => {


    try {
        res.send('Update by ID API')
    
    }
    catch (err:any) {
        let errorMessage = "Failed to do something exceptional";
        if (err instanceof Error) {
        err.message =  errorMessage ;
          }
          
        res.status(400).json({message: err.message})
        throw new Error(err);
        
    }

})

//Delete by ID Method
router.delete('/delete/:id',  (req: Request, res: Response) => {


    try {
        res.send('Delete by ID API')
    
    }
    catch (err:any) {
        let errorMessage = "Failed to do something exceptional";
        if (err instanceof Error) {
        err.message =  errorMessage ;
          }
          
        res.status(400).json({message: err.message})
        throw new Error(err);
        
    }


})

module.exports = router;