import { User } from '../models/users';

let users = [
    new User(1, 'Luis Miguel López'),
    new User(2, 'Ángel Naranjo')
];


const userRepository = {

    findAll() {
        return users;
    },
    findById(id) {
        let result = users.filter(user => user.id == id);
        return Array.isArray(result) && result.length > 0 ? result[0] : undefined;
    }

}


export  {
    userRepository
}