import prisma from "../../../client.ts";

export default async (req, res) => {
    if (req.method !== "POST")
        return res.status(405).
            json({ message: "Request method Tidak Diijinkan" });
    const produk = JSON.parse(req.body);
    const del = await prisma.produk.delete({
        where: {
            idProduk: produk.idProduk,
        },
    })
    res.json(del);
};