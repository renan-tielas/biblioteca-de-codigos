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
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const Usuario = require('../models/modeloUsuario');
const router = express.Router();
//// POST -  Cria Usuário
router.post('/post', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.email || !req.body.nome) {
            res.status(400).send('usuario sem nome ou email');
        }
        const usuario = new Usuario({
            nome: req.body.nome,
            email: req.body.email,
            dataCriacao: req.body.dataCriacao // age: req.body.age
        });
        const dataToSave = usuario.save();
        res.status(201).send(usuario).json(dataToSave);
        // res.status(200).json(dataToSave)
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Erro no servidor');
    }
}));
//GET ALL - Pega todos os Usuários
router.get('/pegaUsuarios', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield Usuario.find({});
        res.status(200).json({ success: true, data: usuarios });
    }
    catch (err) {
        let errorMessage = "Failed to do something exceptional";
        if (err instanceof Error) {
            err.message = errorMessage;
        }
        res.status(400).json({ message: err.message });
        throw new Error(err);
    }
}));
//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    try {
        res.send(req.params.id);
    }
    catch (err) {
        let errorMessage = "Failed to do something exceptional";
        if (err instanceof Error) {
            err.message = errorMessage;
        }
        res.status(400).json({ message: err.message });
        throw new Error(err);
    }
});
//Update by ID Method
router.patch('/update/:id', (req, res) => {
    try {
        res.send('Update by ID API');
    }
    catch (err) {
        let errorMessage = "Failed to do something exceptional";
        if (err instanceof Error) {
            err.message = errorMessage;
        }
        res.status(400).json({ message: err.message });
        throw new Error(err);
    }
});
//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    try {
        res.send('Delete by ID API');
    }
    catch (err) {
        let errorMessage = "Failed to do something exceptional";
        if (err instanceof Error) {
            err.message = errorMessage;
        }
        res.status(400).json({ message: err.message });
        throw new Error(err);
    }
});
module.exports = router;
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
// catch (err:any) {
//     let errorMessage = "Failed to do something exceptional";
//     if (err instanceof Error) {
//     err.message =  errorMessage ;
//       }
//     res.status(400).json({message: err.message})
//     throw new Error(err);
// }
// RETIRADO DE ARQUIVO TIPOS .TSX
// type Tipos{ interface Postagem {
//     titulo:string,
//     conteudo:string,
//     tags:string[]
//   }
//   interface PropsPagina{
//     isConnected:boolean,
//     posts: Postagem[]
//   }}
//   export default Tipos
