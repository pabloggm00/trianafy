import { SongRepository } from '../respository/songRepository';

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
        if (persona != undefined)
            res.json(song);
        else
            res.sendStatus(404);
    },

    nuevaCancion: async (req, res) => {
        let cancionCreada = await SongRepository.create({
            id:req.body.id,
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
            res.status(200).json(cancionModificada);
    },
}


export {
    SongController
}