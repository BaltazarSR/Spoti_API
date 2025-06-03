import express from 'express'
import favoriteController from '../controllers/favoriteController.js';

const router = express.Router();

router.post('/users/:userId/favorites', favoriteController.createFavorite);

export default router