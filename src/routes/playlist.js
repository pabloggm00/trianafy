import { Router } from 'express';
import { PlaylistController } from '../controllers/playlistController';

const router = Router();

router.get('/', PlaylistController.todasLasPlaylist);

router.get('/:id', PlaylistController.playlistPorId);

router.get('/:id/songs', PlaylistController.cancionesDePlaylist);

router.get('/:id_playlist/songs/:id_song', PlaylistController.unaCancionDePlaylist);

router.post('/', PlaylistController.addPlaylist);

router.post('/:id_playlist/songs/:id_song', PlaylistController.addSongPlaylist);

router.put('/:id', PlaylistController.editPlaylist);

router.delete('/:id_playlist/songs/:id_song', PlaylistController.delSongPlaylist);

router.delete('/:id', PlaylistController.deletePlaylist);
export default router;