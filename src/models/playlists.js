import mongoose from 'mongoose';
import { Song } from './song';
const { Schema } = mongoose;

const playlistSchema = ({
    name: String,
    description: String,
    user_id: String,
    songs: [{
        type: mongoose.ObjectId,
        ref: 'Song'
    }]
});

const Playlist = mongoose.model('Playlist', playlistSchema);

export {
    Playlist
}