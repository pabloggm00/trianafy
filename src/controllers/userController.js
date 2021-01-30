import {
    User,
} from '../models/users';
import { UserRepository } from '../respository/userRepository';
import { validationResult } from 'express-validator';
import mongoose from 'mongoose';

const UserController = {

    //Para manejar fácil los usuarios, no pide para trabajo

    //GET

    todosLosUsuarios : async (req, res) => {
        const data = await UserRepository.findAll();
        if (Array.isArray(data) && data.length > 0) 
            res.json(data);
        else
            res.sendStatus(404);
    },

    usuarioPorId : async (req, res) => {

        
        let user = await UserRepository.findById(req.params.id);
            if (user != undefined) {
                res.json(user);
            } else {
                res.sendStatus(404);
            }
        
    },

    //POST

    /*nuevoUsuario : async (req, res) => {
        
        let userCreated = await UserRepository.create({
            _id:new mongoose.Types.ObjectId(),
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            pass: req.body.pass
        })
        res.status(201).json({
            _id: userCreated.id,
            fullname: userCreated.fullname,
            username: userCreated.username,
            email: userCreated.email
        });
    },*/

    //PUT

    editarUsuario: async (req, res) => {
       
        let usuarioModificado = await UserRepository.updateById(req.params.id, {
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            pass: req.body.pass
        });
        if (usuarioModificado == undefined)
            res.sendStatus(404);
        else
            res.status(200).json(usuarioModificado);
    },

    //DELETE

    eliminarUsuario: async (req, res) => {
        await UserRepository.delete(req.params.id);
        res.sendStatus(204);
    }


};



export  {
    UserController
}