import { RequestHandler } from "express";
import * as galleryService from '../services/gallery';

export const createGallery: RequestHandler = async (req, res) => {
    const { title } = req.body || {};

    console.log(req.body !== undefined ? '🟢 Succes! Gallery created. 🟢'  : '🔴 Request body is undefined. 🔴');

    if (!title || title.trim() === '') {
        res.status(400).json({ error: '🔴 You need to send a title to create a gallery. 🔴' });
        return;
    }

    const newGallery = await galleryService.createGaller(title);
    res.status(201).json({ gallery: newGallery });
}