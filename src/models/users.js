
class User {

    constructor(id, username) {
        this.id = id;
        this.username = username;
    }


}

let users = [
    new User(1, 'Luis Miguel López'),
    new User(2, 'Ángel Naranjo')
];


const userRepository = {

    findAll() {
        return users;
    },
    findById(id) {
        const posicion = indexOfPorId(id);
        return posicion == -1 ? undefined : users[posicion];
    },

    // Inserta un nuevo usuario y devuelve el usuario insertado
    create(newUser) {
        const lastId = users.length == 0 ? 0 : users[users.length-1].id;
        const newId = lastId + 1;
        const result = new User(newId, newUser.username);
        users.push(result);
        return result;
    },
    // Actualiza un usuario identificado por su ID
    updateById(id, modifiedUser) {
        const posicionEncontrado = indexOfPorId(id)
        if (posicionEncontrado != -1) {
            users[posicionEncontrado].username = modifiedUser.username;
        }
        return posicionEncontrado != -1 ? users[posicionEncontrado] : undefined;
    },
    // Versión del anterior, en la que el ID va dentro del objeto usuario
    update(modifiedUser) {
        return this.update(modifiedUser.id, modifiedUser);
    }, 
    delete(id) {
        const posicionEncontrado = indexOfPorId(id);
        if (posicionEncontrado != -1)
            users.splice(posicionEncontrado, 1);
    }

}


export  {
    User,
    userRepository
}