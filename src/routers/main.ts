import { Request, Response, Router } from 'express';
import * as pingController from '../controllers/ping';
import * as galleryController from '../controllers/galleries';
import { upload } from '../libs/multer';


const route = Router();

route.get('/ping', pingController.ping);

route.post('/galleries', galleryController.createGallery)
route.get('/galleries', galleryController.getGalleries)
route.get('/gallery/:id', galleryController.getPhotosFromGallery)

route.post('/upload',upload.single('photo'),galleryController.upload)

export default route;