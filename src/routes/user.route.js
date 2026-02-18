import express from 'express';
import { registerUser } from '../controllers/user.controller';

const router = express.Router()

app.post('/register',registerUser)

export default router