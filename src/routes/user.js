import { Router } from 'express';
import { param, body } from 'express-validator';
import { UserController } from '../controllers/userController';
import { validar } from '../middlewares/validacion'

const router = Router();

router.get('/', UserController.todosLosUsuarios)

router.get('/me', UserController.me);

router.get('/:id', 
    /*[
        param('id').isInt().withMessage('ID debe ser un número entero')
    ],
    validar,*/
    UserController.usuarioPorId);

//router.post('/', UserController.nuevoUsuario);
/*router.post('/', [
        body('id').not().exists().withMessage('No es necesario que proporcione un ID; este se asignará automáticamente'),
        body('fullname'),
        body('username').isLength({min: 5}).withMessage('La longitud mínima del nombre de usuario son 5 caracteres'),
        body('email')
            .isEmail()
            .withMessage('El campo email debe ser un email válido')
            .custom(async email => {
                if(await emailExists(email)) {
                    throw new Error('El email ya está registrado. Proporcione un valor diferente');
                } else {  
                    return true;
                }
            }),
    ],
    validar, 
    UserController.nuevoUsuario);*/

//router.put('/:id', UserController.editarUsuario);

router.delete('/:id', UserController.eliminarUsuario)

export default router;