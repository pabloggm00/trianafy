import { Router } from 'express';
import { PlaylistController } from '../controllers/playlistController';
import { token } from '../services/passport'

const router = Router();

router.get('/', token(), PlaylistController.todasLasPlaylist);

router.get('/:id', token(), PlaylistController.playlistPorId);

router.get('/:id/songs', token(),  PlaylistController.cancionesDePlaylist);

router.get('/:id_playlist/songs/:id_song', token(),  PlaylistController.unaCancionDePlaylist);

router.post('/', token(), PlaylistController.addPlaylist);

router.post('/:id_playlist/songs/:id_song', token(),PlaylistController.addSongPlaylist);

router.put('/:id', token() ,PlaylistController.editPlaylist);

router.delete('/:id_playlist/songs/:id_song', token(), PlaylistController.delSongPlaylist);

router.delete('/:id', token(), PlaylistController.deletePlaylist);
export default router;