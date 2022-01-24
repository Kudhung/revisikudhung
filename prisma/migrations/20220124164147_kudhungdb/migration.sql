-- CreateTable
CREATE TABLE "Kategori" (
    "idKtg" SERIAL NOT NULL,
    "jenisKtg" TEXT NOT NULL,
    "gambarKtg" TEXT NOT NULL,

    CONSTRAINT "Kategori_pkey" PRIMARY KEY ("idKtg")
);

-- CreateTable
CREATE TABLE "Produk" (
    "idProduk" SERIAL NOT NULL,
    "namaProduk" TEXT NOT NULL,
    "jenisKain" TEXT NOT NULL,
    "hargaProduk" TEXT NOT NULL,
    "hargaSale" TEXT NOT NULL,
    "deskripsiProduk" TEXT NOT NULL,
    "statusProduk" TEXT NOT NULL,
    "gambar1Produk" TEXT NOT NULL,
    "keteranganGambar1" TEXT NOT NULL,
    "gambar2Produk" TEXT NOT NULL,
    "keteranganGambar2" TEXT NOT NULL,
    "kategoriProduk" TEXT NOT NULL,
    "tepiProduk" TEXT NOT NULL,
    "ukuranProduk" TEXT NOT NULL,

    CONSTRAINT "Produk_pkey" PRIMARY KEY ("idProduk")
);

-- CreateTable
CREATE TABLE "Bundling" (
    "idBundling" SERIAL NOT NULL,
    "namaBundling" TEXT NOT NULL,
    "gambar1Bundling" TEXT NOT NULL,
    "keteranganGambar1" TEXT NOT NULL,
    "gambar2Bundling" TEXT NOT NULL,
    "keteranganGambar2" TEXT NOT NULL,
    "hargaBundling" TEXT NOT NULL,
    "DeskripsiBundling" TEXT NOT NULL,

    CONSTRAINT "Bundling_pkey" PRIMARY KEY ("idBundling")
);

-- CreateTable
CREATE TABLE "Slider" (
    "idSlider" SERIAL NOT NULL,
    "gambarSlider" TEXT NOT NULL,
    "keteranganSlider" TEXT NOT NULL,
    "periodeSlider" TEXT NOT NULL,
    "statusSlider" TEXT NOT NULL,
    "kategoriSlider" TEXT NOT NULL,

    CONSTRAINT "Slider_pkey" PRIMARY KEY ("idSlider")
);

-- CreateIndex
CREATE UNIQUE INDEX "Kategori_jenisKtg_key" ON "Kategori"("jenisKtg");

-- CreateIndex
CREATE UNIQUE INDEX "Produk_namaProduk_key" ON "Produk"("namaProduk");

-- CreateIndex
CREATE UNIQUE INDEX "Bundling_namaBundling_key" ON "Bundling"("namaBundling");
