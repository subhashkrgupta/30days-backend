import express from 'express';
import { loginUser, logoutUser, refreshAccessToken, registerUser } from '../controllers/user.controller.js';

const router = express.Router()

router.post('/register',registerUser)
router.post('/login',loginUser);


//secure routes
router.post('/logout',logoutUser)
router.post('/refresh-token',refreshAccessToken )

export default router