import {
    User,
    userRepository
} from '../models/users';


const UserController = {

    todosLosUsuarios : (req, res) => {
        res.json(req.context.models.users.userRepository.findAll());
    },

    usuarioPorId : (req, res) => {
        let user = req.context.models.users.userRepository.findById(req.params.id);
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
        let usuarioCreado = await userRepository.create(new User(undefined, req.body.username));
        res.status(201).json(usuarioCreado);
    },

    editarUsuario: async (req, res) => {
        let usuarioModificado = await userRepository.updateById(req.params.id, new User(undefined, req.body.username));
        if (usuarioModificado == undefined)
            res.sendStatus(404);
        else   
            res.status(200).json(usuarioModificado);
    },

    eliminarUsuario: async (req, res) => {
        await userRepository.delete(req.params.id);
        res.sendStatus(204);
    }


};



export  {
    UserController
}