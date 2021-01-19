import { User } from '../models/users.js'

let users = [
    new User(1, 'Luis','Miguel López', 'luismiguel', 'luismi@email.com', '1234'),
    new User(2, 'Ángel', 'Naranjo', 'angelnaranjo', 'angelnaranjo@email.com', '12345')
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
    users,
    userRepository
}