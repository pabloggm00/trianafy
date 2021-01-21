import { Playlist } from '../models/playlists';

const PlaylistRepository = {

    async findAll(){
        return await Playlist.find.exec();
    },

    async findById(id){
        const result = await Playlist.findById(id).exec();
        return  result != null ? result : undefined; 
    }

}

export {
    PlaylistRepository
}