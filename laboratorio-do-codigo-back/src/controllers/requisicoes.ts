import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

const {Usuario,Codigo} = require('../models/modelos');
// interface Post {
//     userId: Number;
//     id: Number;
//     title: String;
//     body: String;
// }

const addUsuario = async (req: Request, res: Response, next: NextFunction) => {
    
    
    try {
        if (!req.body.email || !req.body.nome){res.status(400).send('usuario sem nome ou email')}

        const usuario = new Usuario({
            nome: req.body.nome,
            email: req.body.email,
            dataCriacao: req.body.dataCriacao           // age: req.body.age
        })
        const dataToSave = usuario.save();
        res.status(201).send(usuario).json(dataToSave)
        // res.status(200).json(dataToSave)
    }

    catch(err:any){
        console.error(err.message);
        res.status(500).send('Erro no servidor')
    
    }
};


const addCodigo = async (req: Request, res: Response, next: NextFunction) => {
    
    
    try {
        if (!req.body.titulo || !req.body.conteudo){res.status(400).send('codigo sem titulo ou conteudo!')}

        const codigo = new Codigo({
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            conteudo: req.body.conteudo,
            codigo: req.body.codigo,
            dataCriacao: req.body.dataCriacao           // age: req.body.age
        })
        
        const dataToSave = codigo.save();
        res.status(201).send(codigo).json(dataToSave)
        // res.status(200).json(dataToSave)
    }

    catch(err:any){
        console.error(err.message);
        res.status(500).send('Erro no servidor')
    
    }
};



// getting all posts
const pegaUsuarios = async (req: Request, res: Response, next: NextFunction) => {
    
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
    };
// getting all posts
const pegaCodigos = async (req: Request, res: Response, next: NextFunction) => {
    
try {
    const usuarios = await Codigo.find({})
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
};

// getting a single post
const getPost = async (req: Request, res: Response, next: NextFunction) => {

    // get the post id from the req
    // let id: string = req.params.id;


    // // get the post
    // let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // let post: Post = result.data;
    // return res.status(200).json({
    //     message: post
    // });
};

// updating a post
const updatePost = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req.params
    // let id: string = req.params.id;
    // // get the data from req.body
    // let title: string = req.body.title ?? null;
    // let body: string = req.body.body ?? null;
    // // update the post
    // let response: AxiosResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    //     ...(title && { title }),
    //     ...(body && { body })
    // });
    // return response
    // return res.status(200).json({
    //     message: response.data
    // });
};

// deleting a post
const deletePost = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from req.params
    // let id: string = req.params.id;
    // // delete the post
    // let response: AxiosResponse = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // // return response
    // return res.status(200).json({
    //     message: 'post deleted successfully'
    // });
};


export default { pegaUsuarios, pegaCodigos, getPost, updatePost, deletePost, addUsuario, addCodigo };