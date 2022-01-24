import prisma from "../../../client.ts";

export default async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).
      json({ message: "Request method Tidak Diijinkan" });
  const bundling = JSON.parse(req.body);
  const del = await prisma.bundling.delete({
    where: {
      idBundling: bundling.idBundling,
    },
  })
  res.json(del);
};