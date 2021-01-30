import { Router } from 'express';
import { param, body } from 'express-validator';
import { UserController } from '../controllers/userController';
import { validar } from '../middlewares/validacion'

const router = Router();

router.get('/', UserController.todosLosUsuarios)

//router.post('/', UserController.nuevoUsuario)

router.get('/:id', 
    /*[
        param('id').isInt().withMessage('ID debe ser un número entero')
    ],
    validar,*/
    UserController.usuarioPorId);


router.delete('/:id', UserController.eliminarUsuario)

export default router;