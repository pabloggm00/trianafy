import mongoose from 'mongoose';
const { Schema } = mongoose;

const songSchema = new Schema({
    id: String,
    title: String,
    artist: String,
    album: String,
    year: Number
});

const Song = mongoose.model('Song', songSchema);

export {
    Song
}