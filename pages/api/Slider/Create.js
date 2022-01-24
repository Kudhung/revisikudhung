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

    const slider = JSON.parse(req.body)
    const create = await prisma.slider.create({
        data: {
            gambarSlider: slider.gambarSlider,
            keteranganSlider: slider.keteranganSlider,
            periodeSlider: slider.periodeSlider,
            statusSlider: slider.statusSlider,
            kategoriSlider: slider.kategoriSlider
        },
    });

    res.json(create)
}