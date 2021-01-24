import { Playlist } from '../models/playlists';
import mongoose from 'mongoose';
const PlaylistRepository = {

    async findAll(){
        return await Playlist
            .find()
            .populate('songs', 'name')
            .exec();
    },

    async findById(id){
        return await Playlist
            .findById(id)
            .populate('songs')
            .exec();
    },

    async create(newPlaylist) {
        const thePlaylist = new Playlist({
            _id : new mongoose.Types.ObjectId(),
            name: newPlaylist.name,
            description : newPlaylist.description
        });
        const result = await thePlaylist.save();
        return result;
    },

    async updatePlaylist(id, modifiedPlaylist) {
        const playlistSaved = await Playlist.findById(id);

        if ( playlistSaved != null){
            return await Object.assign(playlistSaved, modifiedPlaylist).save();
        } else {
            return undefined;
        }
    },

    async deletePlaylist(id) {
        await Playlist.findByIdAndRemove(id).exec();
    }

}

export {
    PlaylistRepository
}