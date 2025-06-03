import express from 'express'
import favoriteController from '../controllers/favoriteController.js';

const router = express.Router();

router.post('/users/:userId/favorites', favoriteController.createFavorite);
router.get('/users/:userId/favorites', favoriteController.getFavoriteByUserId);
router.delete('/users/:userId/favorites/delete', favoriteController.deleteFavorite);

export default router