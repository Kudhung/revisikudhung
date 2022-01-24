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
  const kategori = JSON.parse(req.body);
  const update = await prisma.kategori.update({
    where: {
      idKtg: Number(kategori.idKtg),
    },
    data: {
      jenisKtg: kategori.jenisKtg,
      gambarKtg: kategori.gambarKtg
    },
  });
  res.json(update);
};