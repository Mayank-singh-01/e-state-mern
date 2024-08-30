import express, { Router } from 'express';
import { signin, signUp ,google, signOut} from '../controllers/Auth.controller.js';

const router = express.Router();

router.post('/signUp',signUp)
router.post('/signin',signin)
router.post('/google',google)
router.get('/signOut',signOut)


export default router;