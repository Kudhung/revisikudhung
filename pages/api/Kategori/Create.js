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

    const kategori = JSON.parse(req.body)
    const create = await prisma.kategori.create({
        data: {
            jenisKtg: kategori.jenisKtg,
            gambarKtg:kategori.gambarKtg
        },
    });

    res.json(create)
}