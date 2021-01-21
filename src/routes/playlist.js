import { Router } from 'express';
import { PlaylistController } from '../controllers/playlistController';

const router = Router();

router.get('/', PlaylistController.todasLasPlaylist);

router.get('/:id', PlaylistController.playlistPorId);

router.post('/:id_playlist/song/:id_song', PlaylistController.addSongPlaylist);

router.delete('/:id_playlist/song/:id_song', PlaylistController.delSongPlaylist)