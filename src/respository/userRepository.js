import { User } from '../models/users';


const UserRepository = {

    async findAll() {
        const result =  await User.find({}).exec();
        return result;
    },
    async findById(id) {
        /*let result = users.filter(user => user.id == id);
        return Array.isArray(result) && result.length > 0 ? result[0] : undefined;*/
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
            //id : newUser.id,
            fullname: newUser.fullname,
            username : newUser.username,
            email: newUser.email,
            pass : newUser.pass
        });
        const result = await theUser.save();
        return result; // Posiblemente aquí nos interese implementar un DTO
    },
    // Actualiza un usuario identificado por su ID
    /*async updateById(id, modifiedUser) {
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
    }*/

}


export  {
    UserRepository
}