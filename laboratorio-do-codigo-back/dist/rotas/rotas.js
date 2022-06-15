"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const modelos = require('../models/modelos');
const requisicoes_1 = __importDefault(require("../controllers/requisicoes"));
const router = express.Router();
//// POST -  Cria Usuário
router.post('/post', requisicoes_1.default.addUsuario);
router.get('/pegaUsuarios', requisicoes_1.default.pegaUsuarios);
router.post('/postaCodigo', requisicoes_1.default.addCodigo);
router.get('/pegaCodigos', requisicoes_1.default.pegaCodigos);
//GET ALL - Pega todos os Usuários
// router.get('/pegaUsuarios', async (req: Request, res: Response) => {
// try {
//     const usuarios = await Usuario.find({})
//     res.status(200).json({success:true, data:usuarios})
// }
// catch (err:any) {
//     let errorMessage = "Failed to do something exceptional";
//     if (err instanceof Error) {
//     err.message =  errorMessage ;
//       }
//     res.status(400).json({message: err.message})
//     throw new Error(err);
// }
// })
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
