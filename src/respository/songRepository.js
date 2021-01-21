import { Song } from '../models/song';

const SongRepository = {
   
    async findAll(){
        return await Song.find().exec();
    },

    async findById(id){
        const result = await Song.findById(id).exec();
        return resul != null ? result : undefined;
    }
}

export {
    SongRepository
}