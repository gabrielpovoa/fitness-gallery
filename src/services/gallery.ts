import { prisma } from '../libs/prisma';

export const createGaller = async (title: string) => {
    const newGallery = await prisma.gallery.create({
        data: { title }
    });
    return newGallery;
};