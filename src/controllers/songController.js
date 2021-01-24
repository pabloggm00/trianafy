import { SongRepository } from '../respository/songRepository';
import mongoose from 'mongoose';

const SongController = {

    todasLasCanciones: async (req,res) => {
        const data = await SongRepository.findAll();
        if ( Array.isArray(data) && data.length > 0)
            res.json(data);
        else    
            res.sendStatus(404);
    },

    cancionPorId: async (req,res) => {
        let song = await SongRepository.findById(req.params.id);
        if (song != undefined)
            res.json(song);
        else
            res.sendStatus(404);
    },

    nuevaCancion: async (req, res) => {
        let cancionCreada = await SongRepository.create({
            _id:new mongoose.Types.ObjectId(),
            title: req.body.title,
            artist: req.body.artist,
            album: req.body.album,
            year: req.body.year
        })
        res.status(201).json(cancionCreada);
    },

    editarCancion: async (req, res) => {
        // let usuarioModificado = userRepository.updateById(req.params.id, new User(undefined, req.body.username));
        // Ya no tenemos la clase user para usarla así, tenemos que crear un simple objeto
        let cancionModificada = await SongRepository.updateById(req.params.id, {
            title: req.body.title,
            artist: req.body.artist,
            album: req.body.album,
            year: req.body.year
        });
        if (cancionModificada == undefined)
            res.sendStatus(404);
        else
            res.status(204).json(cancionModificada);
    },

    eliminarCancion: async (req, res) => {
        await SongRepository.deleteSong(req.params.id);
        res.sendStatus(204);
    }
}


export {
    SongController
}