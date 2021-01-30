import bcrypt from 'bcryptjs';
import "dotenv/config";
import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    _id: Schema.Types.ObjectId, //poner _id
    fullname: String,
    username: String,
    email: String,
    pass:  String
});

const User = mongoose.model('User', userSchema);

/*const toDto = () => {
    return {
        id: this.id,
        username: this.username, 
        fullname: this.fullname,
        email: this.email
    }
}*/

const emailExists = async (email) => {
    const users = await User.find().exec();
    let emails = users.map(user => user.email);
    return emails.includes(email);
}

const usernameExists = async (username) => {
    const users = await User.find({}).exec();
    let usernames = await users.map(user => user.username);
    return usernames.includes(username);
}


export  {
    User,
    emailExists,
    usernameExists,
    //toDto
}