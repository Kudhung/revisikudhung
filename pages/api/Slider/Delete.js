import prisma from "../../../client.ts";

export default async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).
      json({ message: "Request method Tidak Diijinkan" });
  const slider = JSON.parse(req.body);
  const del = await prisma.slider.delete({
    where: {
      idSlider: slider.idSlider,
    },
  })
  res.json(del);
};