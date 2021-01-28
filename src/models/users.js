import bcrypt from 'bcryptjs';
import "dotenv/config";
import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    fullname: String,
    username: String,
    email: String,
    pass: String
})

const User = mongoose.model('User', userSchema);

const toDto = () => {
    return {
        id: this.id,
        username: this.username, 
        fullname: this.fullname,
        email: this.email
    }
}

const emailExists = async (email) => {
    const result = await User.countDocuments({ email: email }).exec();
    return result > 0;

}

const usernameExists = async (username) => {
    let usernames = await User.map(user => user.username);
    return usernames.includes(username);
}


export  {
    User,
    emailExists,
    usernameExists,
    toDto
}