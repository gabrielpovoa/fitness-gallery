import { Request, Response, Router } from 'express';
import * as pingController from '../controllers/ping';
import * as galleryController from '../controllers/galleries';
const route = Router();

route.get('/ping', pingController.ping);

route.post('/galleries', galleryController.createGallery)


export default route;