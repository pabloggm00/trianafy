import { UserRepository } from '../respository/userRepository';
import { User } from '../models/users';
import { bcrypt } from 'bcryptjs';
import "dotenv/config";
import { JwtService } from '../services/jwt';

const AuthController = {
    
    register:  (req, res, next) => {
        let userCreated =  UserRepository.create(
            new User(req.body.fullname, req.body.username, req.body.email, bcrypt.hashSync(req.body.pass, parseInt(process.env.BCRYPT_ROUNDS)))
        );

        res.status(201).json({
            id: userCreated.id,
            fullname: userCreated.fullname,
            username: userCreated.username,
            email: userCreated.email
        });
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