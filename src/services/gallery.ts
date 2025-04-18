import { prisma } from '../libs/prisma';

export const createGaller = async (title: string) => {
    const newGallery = await prisma.gallery.create({
        data: { title }
    });
    return newGallery;
};

export const getGalleries = async () => {
    const galleries = await prisma.gallery.findMany({
        orderBy: { id: 'desc' },
        include: {
            photos: {
                select: { filename: true },
                take: 1,
                orderBy: { id: 'asc' }
            }
        },
    });

    const galleriesWithThumb = galleries.map(gallery => ({
        id: gallery.id,
        title: gallery.title,
        thumbnail: gallery.photos[0] ? `${process.env.BASE_URL}/images/thumb/${gallery.photos[0].filename}` : null,
    }));
    return galleriesWithThumb;
}

export const getGallery = async (galleryId: number) => {
    const gallery = await prisma.gallery.findFirst({
        where: { id: galleryId },
        select: { id: true, title: true }
    });
    return gallery;
}