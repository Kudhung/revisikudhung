import prisma from "../../../client.ts";

export default async (req, res) => {
    if (req.method !== "POST")
        return res.status(405).
            json({ message: "Request method Tidak Diijinkan" });
    const ktg = JSON.parse(req.body);
    const del = await prisma.kategori.delete({
        where: {
            idKtg: ktg.idKtg
        },
    })
    res.json(del);
};