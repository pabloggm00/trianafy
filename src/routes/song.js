import { Router } from 'express';
import { SongController } from '../controllers/songController';

const router = Router();

router.get('/', SongController.todasLasCanciones);

router.get('/:id', SongController.cancionPorId);

router.post('/', SongController.nuevaCancion);

router.put('/:id', SongController.editarCancion);

//router.delete('/:id', PersonaController.eliminarPersona);*/



export default router;