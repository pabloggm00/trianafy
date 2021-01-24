import { SongRepository } from '../respository/songRepository';
import { PlaylistRepository } from '../respository/playlistRepository';
import { Playlist } from '../models/playlists';
import mongoose from 'mongoose';

const PlaylistController = {

    todasLasPlaylist: async (req, res) => {
        const data = await PlaylistRepository.findAll();
        if (Array.isArray(data) && data.length > 0)
            res.json(data);
        else
            res.sendStatus(404);
    },

    playlistPorId: async (req, res) => {
        let playlist = await PlaylistRepository.findById(req.params.id);
        if (playlist != undefined)
            res.json(playlist);
        else
            res.sendStatus(404);
    },

    addPlaylist: async (req, res) => {
        let playlist = await PlaylistRepository.create({
            _id:new mongoose.Types.ObjectId(),
            name: req.body.name,
            description: req.body.description
        });
        res.status(201).json(playlist);
    },

    editPlaylist: async (req, res) => {
        let nuevaPlaylist = await PlaylistRepository.updatePlaylist(req.params.id, {
            name: req.body.name,
            description: req.body.description
        });

        if (nuevaPlaylist == undefined)
            res.sendStatus(404);
        else
            res.status(204).json(nuevaPlaylist);
    },

    deletePlaylist: async (req, res) => {
        await PlaylistRepository.deletePlaylist(req.params.id);
        res.sendStatus(204);
    },

    addSongPlaylist: async (req, res) => {
        let song = await SongRepository.findById(req.params.id_song);
        if (song != undefined) {
            let playlist = await PlaylistRepository.findById(req.params.id_playlist);
            if (playlist != undefined) {
                playlist.songs.push(req.params.id_song);
                await playlist.save();
                res.json(await PlaylistRepository.findById(playlist._id));

            } else {
                res.status(400).json({
                    mensaje: `La playlist con ID: ${req.params.id_playlist} no está registrada en la base de datos`
                });
            }
        } else {
            res.status(400).json({
                mensaje: `La canción con ID: ${req.params.id_song} no está registrada en la base de datos`
            });
        }
    },

    delSongPlaylist: async (req, res) => {
        let playlist = await PlaylistRepository.findById(req.params.id_playlist);
        if ( playlist != undefined) {
            playlist.songs.pull(req.params.id_song);
            await playlist.save();
            res.json(await PlaylistRepository.findById(playlist._id));
        } else {
            res.status(400).json({
                mensaje: `La playlist con ID: ${req.params.id_playlist} no está registrada en la base de datos`
            });
        }
    }
}

export  {
    PlaylistController
}