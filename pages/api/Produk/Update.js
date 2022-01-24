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
  const produk = JSON.parse(req.body);
  const update = await prisma.produk.update({
    where: {
      idProduk: Number(produk.idProduk),
    },
    data: {
      namaProduk: produk.namaProduk,
      jenisKain: produk.jenisKain,
      hargaProduk: produk.hargaProduk,
      hargaSale: produk.hargaSale,
      deskripsiProduk: produk.deskripsiProduk,
      statusProduk: produk.statusProduk,
      gambar1Produk: produk.gambar1Produk,
      keteranganGambar1: produk.keteranganGambar1,
      gambar2Produk: produk.gambar2Produk,
      keteranganGambar2: produk.keteranganGambar2,
      kategoriProduk: produk.kategoriProduk,
      tepiProduk: produk.tepiProduk,
      ukuranProduk: produk.ukuranProduk
    },
  });
  res.json(update);
};