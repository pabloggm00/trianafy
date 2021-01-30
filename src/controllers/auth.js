import { UserRepository } from '../respository/userRepository';
import { User } from '../models/users';
import  bcrypt  from 'bcryptjs';
import "dotenv/config";
import { JwtService } from '../services/jwt';

const AuthController = {
    
    register: async (req, res, next) => {
           
        let userCreated = await UserRepository.create({
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            pass: bcrypt.hashSync(req.body.pass, parseInt(process.env.BCRYPT_ROUNDS))
           
        });
   

        res.status(201).json({
            _id: userCreated.id,
            fullname: userCreated.fullname,
            username: userCreated.username,
            email: userCreated.email
        });
       
    },

    login:  (req, res, next) => {

        const token =  JwtService.sign(req.user);
        res.status(201).json({
            user_id: req.user._id,
            user_fullname: req.user.fullname,
            user_username: req.user.username,
            user_email: req.user.email,
            token: token
        });
    } 
    
}


export {
    AuthController
};