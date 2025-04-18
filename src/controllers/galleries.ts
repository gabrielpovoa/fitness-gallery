import { RequestHandler } from "express";
import * as GalleryService from '../services/gallery';
import * as PhotoService from '../services/photo';
import fs from 'fs/promises';


export const createGallery: RequestHandler = async (req, res) => {
    const { title } = req.body || {};

    if (!title || title.trim() === '') {
        res.status(400).json({ error: '🔴 You need to send a title to create a gallery. 🔴' });
        return;
    }

    const newGallery = await GalleryService.createGaller(title);
    res.status(201).json({ gallery: newGallery });
}

export const getGalleries: RequestHandler = async (req, res) => {
    const galleries = await GalleryService.getGalleries();
    res.json({ list: galleries });
}

export const getPhotosFromGallery: RequestHandler = async (req, res) => {
    const { id } = req.params;

    const gallery = await GalleryService.getGallery(parseInt(id));
    const photos = await PhotoService.getPhotos(parseInt(id));

    res.json({ gallery, photos });
}

export const upload: RequestHandler = async (req, res) => {
    if (req.file) {
        const { gallery } = req.body;

        if (gallery) {
            const gal = await GalleryService.getGallery(parseInt(gallery))
            if (gal) {

                const fileName = await PhotoService.handleRawPhoto(req.file.path);
                await PhotoService.createPhoto(gal.id, fileName);

                res.status(201).json({});

            } else {
                await fs.unlink(req.file.path);
                res.json({ error: "Gallery doesn't exist" });
            }
        } else {
            await fs.unlink(req.file.path);
            res.json({ error: "Gallery doesn't exist" });
        }
    } else {
        res.json({ error: "Any file sent" })
    }
}