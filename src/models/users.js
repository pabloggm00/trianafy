import bcrypt from 'bcryptjs';
import "dotenv/config";
import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    id: Number,
    fullname: String,
    username: String,
    email: String,
    pass: String
})

//const pass = bcrypt.hashSync('12345678', parseInt(process.env.BCRYPT_ROUNDS));



const User = mongoose.model('User', userSchema);

const emailExists = async (email) => {
    const result = await User.countDocuments({ email: email }).exec();
    return result > 0;

}

const usernameExists = (username) => {
    let usernames = users.map(user => user.username);
    return usernames.includes(username);
}

/*class User {

    constructor(id, name, lastname, username, email, pass) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
        this.pass = pass;
    }


}

let users = [
    new User(1, 'Luis Miguel López'),
    new User(2, 'Ángel Naranjo')
];*/



/*
const userRepository = {

    async findAll() {
        const result =  await User.find({}).exec();
        return result;
    },
    async findById(id) {
        /*let result = users.filter(user => user.id == id);
        return Array.isArray(result) && result.length > 0 ? result[0] : undefined;*/
        /*const result = await User.findById(id).exec();
        return result != null ? result : undefined;
    },

    // Inserta un nuevo usuario y devuelve el usuario insertado
    async create(newUser) {
        const theUser = new User({
            id : newUser.id,
            name : newUser.name,
            lastname : newUser.lastname,
            username : newUser.username,
            email: newUser.email,
            pass : newUser.pass
        });
        const result = await theUser.save();
        return result; // Posiblemente aquí nos interese implementar un DTO
    },
    // Actualiza un usuario identificado por su ID
    async updateById(id, modifiedUser) {
        const userSaved = await User.findById(id);

        if (userSaved != null) {
            return await Object.assign(userSaved, modifiedUser).save();
        } else
            return undefined;
    },
    // Versión del anterior, en la que el ID va dentro del objeto usuario
    update(modifiedUser) {
        return this.update(modifiedUser.id, modifiedUser);
    }, 
    async delete(id) {
        await User.findByIdAndRemove(id).exec();
    }

}*/


export  {
    User,
    emailExists,
    usernameExists
}