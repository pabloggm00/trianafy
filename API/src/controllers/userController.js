import { users } from '../repository/userRepository.js';


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
        
    }

};

export  {
    UserController
}