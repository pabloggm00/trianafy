import { Router } from 'express';
import { PlaylistController } from '../controllers/playlistController';

const router = Router();

router.get('/', PlaylistController.todasLasPlaylist);

router.get('/:id', PlaylistController.playlistPorId);

router.post('/', PlaylistController.addPlaylist);

router.delete('/:id', PlaylistController.deletePlaylist);

router.put('/:id', PlaylistController.editPlaylist);

router.post('/:id_playlist/songs/:id_song', PlaylistController.addSongPlaylist);

router.delete('/:id_playlist/songs/:id_song', PlaylistController.delSongPlaylist);

export default router;