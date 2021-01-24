import { UserRepository } from '../respository/userRepository';
import { User } from '../models/users';
import  bcrypt  from 'bcryptjs';
import "dotenv/config";
import { JwtService } from '../services/jwt';

const AuthController = {
    
    register: async (req, res, next) => {
        try{
           
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
        }catch(err){
            console.log(err);
        }
    },

    login:  (req, res, next) => {

        const token =  JwtService.sign(req.user);
        res.status(201).json({
            user: req.user,
            token: token
        });
    } 
    
}


export {
    AuthController
};