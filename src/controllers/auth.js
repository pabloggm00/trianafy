import { UserRepository } from '../respository/userRepository';
import { User } from '../models/users';
import { bcrypt } from 'bcryptjs';
import "dotenv/config";
import { JwtService } from '../services/jwt';

const AuthController = {
    
    register: async (req, res, next) => {
        
        let userCreated = await UserRepository.create({
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            //pass: bcrypt.hashSync(req.body.pass, parseInt(process.env.BCRYPT_ROUNDS))
            pass: req.body.pass
        });
   

        res.status(201).json({
            id: userCreated.id,
            fullname: userCreated.fullname,
            username: userCreated.username,
            email: userCreated.email
        });
    
    },

    login: async (req, res, next) => {

        const token = await JwtService.sign(req.user);
        res.status(201).json({
            user: req.user,
            token: token
        });
    } 
}


export {
    AuthController
};