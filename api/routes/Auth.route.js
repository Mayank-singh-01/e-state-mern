import express, { Router } from 'express';
import { signin, signUp } from '../controllers/Auth.controller.js';

const router = express.Router();

router.post('/signUp',signUp)
router.post('/signin',signin)

export default router;