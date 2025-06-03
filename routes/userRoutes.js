import express from 'express';
import userController from '../controllers/userController.js'

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.get('/mail/:mail', userController.getIdByMail);
router.get('/password/:mail', userController.getPasswordByMail);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);

export default router;