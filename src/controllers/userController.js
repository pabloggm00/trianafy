import {
    User,
} from '../models/users';
import { UserRepository } from '../respository/userRepository';
import { validationResult } from 'express-validator';

const UserController = {

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

    me : (req, res) => {
        res.json(req.context.me);
    },

    nuevoUsuario : async (req, res) => {
        // let usuarioCreado = userRepository.create(new User(req.body.username, req.body.email));
        // Ya no tenemos la clase user para usarla así, tenemos que crear un simple objeto
        let usuarioCreado = await UserRepository.create({
            _id:new mongoose.Types.ObjectId(),
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            pass: req.body.pass
        })
        res.status(201).json(usuarioCreado);
    },

    editarUsuario: async (req, res) => {
        // let usuarioModificado = userRepository.updateById(req.params.id, new User(undefined, req.body.username));
        // Ya no tenemos la clase user para usarla así, tenemos que crear un simple objeto
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

    eliminarUsuario: async (req, res) => {
        await UserRepository.delete(req.params.id);
        res.sendStatus(204);
    }


};



export  {
    UserController
}