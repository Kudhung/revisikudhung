import prisma from '../../../client.ts'

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '500mb' // Set desired value here
        }
    }
}
export default async (req, res) => {
    if (req.method !== 'POST')
        return res
            .status(405)
            .json({ message: 'Request method tidak diizinkan' });

    const bundling = JSON.parse(req.body)
    const create = await prisma.bundling.create({
        data: {
            namaBundling: bundling.namaBundling,
            gambar1Bundling: bundling.gambar1Bundling,
            keteranganGambar1: bundling.keteranganGambar1,
            gambar2Bundling:bundling.gambar2Bundling,
            keteranganGambar2: bundling.keteranganGambar2,
            hargaBundling: bundling.hargaBundling,
            DeskripsiBundling: bundling.DeskripsiBundling
        },
    });

    res.json(create)
}