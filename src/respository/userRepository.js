import { User } from '../models/users';
import mongoose from 'mongoose';

const UserRepository = {

    async findAll() {
        const result =  await User.find({}).exec();
        return result;
    },
    async findById(id) {
      
        const result = await User.findById(id).exec();
        return result != null ? result : undefined;
    },

    //Buscamos al usuario por el username, método para el login
    async findByUsername(username) {
        const users = await User.find({}).exec();
        let result = users.filter(user => user.username == username);
        return Array.isArray(result) && result.length > 0 ? result[0] : undefined;   
     },

    // Inserta un nuevo usuario y devuelve el usuario insertado
    async create(newUser) {
        const theUser = new User({
            _id : new mongoose.Types.ObjectId(),
            fullname: newUser.fullname,
            username : newUser.username,
            email: newUser.email,
            pass : newUser.pass
        });
        const result = await theUser.save();
        return result; 
    },
    
    async delete(id) {
        await User.findByIdAndRemove(id).exec();
    }

}


export  {
    UserRepository
}