import mongoose from 'mongoose';
import { Song } from './song';
const { Schema } = mongoose;

const playlistSchema = ({
    _id: Schema.Types.ObjectId,
    name: String,
    description: String,
    user_id: {
        type: mongoose.ObjectId,
        ref: 'User'
    },
    songs: [{
        type: mongoose.ObjectId,
        ref: 'Song'
    }]
});

const Playlist = mongoose.model('Playlist', playlistSchema);

export {
    Playlist
}