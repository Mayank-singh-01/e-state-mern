import express from 'express';
import { createListing } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/varifyUser.js';

const route = express.Router();

route.post('/create',verifyToken,createListing);

export default route;
