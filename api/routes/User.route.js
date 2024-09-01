import express from 'express';
import { deleteUser, getUserListings, test, updateUser } from '../controllers/User.controller.js';
import { verifyToken } from '../utils/varifyUser.js';

const router = express.Router();

router.get('/test',test);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id", verifyToken, getUserListings);

export default router;