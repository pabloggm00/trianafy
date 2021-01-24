import { Song } from '../models/song';
import mongoose from 'mongoose';

const SongRepository = {
   
    async findAll(){
        return await Song.find().exec();
    },

    async findById(id){
        const result = await Song.findById(id).exec();
        return result != null ? result : undefined;
    },

    // Inserta una nueva canción y la devuelve
    async create(newSong) {
        const theSong = new Song({
            _id :new mongoose.Types.ObjectId(),
            title : newSong.title,
            artist : newSong.artist,
            album : newSong.album,
            year: newSong.year,
        });
        const result = await theSong.save();
        return result; // Posiblemente aquí nos interese implementar un DTO
    },

    async updateById(id, modifiedSong) {
        const songSaved = await Song.findById(id);

        if (songSaved != null) {
            return await Object.assign(songSaved, modifiedSong).save();
        } else
            return undefined;
    },

    async deleteSong(id) {
        await Song.findByIdAndRemove(id).exec();
    }
}

export {
    SongRepository
}