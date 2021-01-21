import { Playlist } from '../models/playlists';

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
    }

}

export {
    PlaylistRepository
}