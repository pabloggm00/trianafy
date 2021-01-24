import mongoose from 'mongoose';
const { Schema } = mongoose;

const songSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    artist: String,
    album: String,
    year: Number
});

const Song = mongoose.model('Song', songSchema);

export {
    Song
}