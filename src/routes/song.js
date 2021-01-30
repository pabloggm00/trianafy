import { Router } from 'express';
import { SongController } from '../controllers/songController';
import { token } from '../services/passport'

const router = Router();

router.get('/', token(), SongController.todasLasCanciones);

router.get('/:id',token(), SongController.cancionPorId);

router.post('/', token(), SongController.nuevaCancion);

router.put('/:id', token(), SongController.editarCancion);

router.delete('/:id', token(), SongController.eliminarCancion);



export default router;