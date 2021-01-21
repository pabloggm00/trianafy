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
    }
}


export {
    SongController
}