import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import favoriteRoutes from './routes/favoriteRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api', favoriteRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto  ${PORT}`);
})