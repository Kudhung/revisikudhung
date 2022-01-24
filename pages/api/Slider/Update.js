import prisma from "../../../client.ts";

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '500mb' // Set desired value here
        }
    }
}
export default async (req, res) => {
    if (req.method !== "POST")
        return res
            .status(405)
            .json({ message: "Request method Tidak Diijinkan" });
    const slider = JSON.parse(req.body);
    const update = await prisma.slider.update({
        where: {
            idSlider: Number(slider.idSlider),
        },
        data: {
            gambarSlider: slider.gambarSlider,
            keteranganSlider: slider.keteranganSlider,
            periodeSlider: slider.periodeSlider,
            statusSlider: slider.statusSlider,
            kategoriSlider: slider.kategoriSlider
        },
    });
    res.json(update);
};