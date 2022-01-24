import LayoutAdmin from "../../../component/Layout-Admin"
import prisma from '../../../client.ts'

export async function getServerSideProps(context) {
    let kode = context.params.informasiProduk;
    let data = await prisma.produk.findUnique({
        where: { namaProduk: kode },
    });

    let { idProduk, namaProduk, jenisKain, hargaProduk, hargaSale, deskripsiProduk, statusProduk, gambar1Produk, keteranganGambar1, gambar2Produk, keteranganGambar2, kategoriProduk, tepiProduk, ukuranProduk } = data;
    return { props: { idProduk, namaProduk, jenisKain, hargaProduk, hargaSale, deskripsiProduk, statusProduk, gambar1Produk, keteranganGambar1, gambar2Produk, keteranganGambar2, kategoriProduk, tepiProduk, ukuranProduk } };
};

const InformasiProduk = (props) => {
    return (
        <>
            <LayoutAdmin>
                <link rel="stylesheet" href="/css/Informasi-Produk-Admin.css" media="screen" />
                <section className="u-clearfix u-section-1" id="sec-d82d">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <div className="u-container-style u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xl u-grey-15 u-group u-opacity u-opacity-25 u-shape-rectangle u-group-1">
                            <div className="u-container-layout u-container-layout-1">
                                <h3 className="u-text u-text-default u-text-1">Gallery</h3>
                                <img className="u-image u-image-round u-preserve-proportions u-radius-10 u-image-1" src={props.gambar1Produk} alt="" data-image-width="500" data-image-height="500" />
                                <img className="u-image u-image-round u-preserve-proportions u-radius-10 u-image-2" src={props.gambar2Produk} alt="" data-image-width="500" data-image-height="500" />
                            </div>
                        </div>
                        <div className="u-text u-text-default u-text-1" style={{ marginTop: "3%" }}>
                            <h3 className="u-text u-text-default u-text-1">Informasi Produk</h3>
                        </div>
                        <div className="u-expanded-width u-table u-table-responsive u-table-1">
                            <table className="u-table-entity">
                                <colgroup>
                                    <col width="50%" />
                                    <col width="50%" />
                                </colgroup>
                                <tbody className="u-table-body">
                                    <tr style={{ height: "46px" }}>
                                        <td className="u-align-center u-border-1 u-border-grey-dark-1 u-custom-font u-first-column u-heading-font u-table-cell u-table-cell-1">Nama Produk</td>
                                        <td className="u-border-1 u-border-grey-dark-1 u-table-cell">{props.namaProduk}</td>
                                    </tr>
                                    <tr style={{ height: "45px" }}>
                                        <td className="u-align-center u-border-1 u-border-grey-dark-1 u-custom-font u-first-column u-heading-font u-table-cell u-table-cell-3">Harga Produk</td>
                                        <td className="u-border-1 u-border-grey-dark-1 u-table-cell">{props.hargaProduk}</td>
                                    </tr>
                                    <tr style={{ height: "45px" }}>
                                        <td className="u-align-center u-border-1 u-border-grey-dark-1 u-custom-font u-first-column u-heading-font u-table-cell u-table-cell-3">Harga Sale</td>
                                        <td className="u-border-1 u-border-grey-dark-1 u-table-cell">{props.hargaSale}</td>
                                    </tr>
                                    <tr style={{ height: "46px" }}>
                                        <td className="u-align-center u-border-1 u-border-grey-dark-1 u-custom-font u-first-column u-heading-font u-table-cell u-table-cell-5">Deskripsi</td>
                                        <td className="u-border-1 u-border-grey-dark-1 u-table-cell">{props.deskripsiProduk}</td>
                                    </tr>
                                    <tr style={{ height: "46px" }}>
                                        <td className="u-align-center u-border-1 u-border-grey-dark-1 u-custom-font u-first-column u-heading-font u-table-cell u-table-cell-1">Status Produk</td>
                                        <td className="u-border-1 u-border-grey-dark-1 u-table-cell">{props.statusProduk}</td>
                                    </tr>
                                    <tr style={{ height: "46px" }}>
                                        <td className="u-align-center u-border-1 u-border-grey-dark-1 u-custom-font u-first-column u-heading-font u-table-cell u-table-cell-7">Ukuran</td>
                                        <td className="u-border-1 u-border-grey-dark-1 u-table-cell">{props.ukuranProduk}</td>
                                    </tr>
                                    <tr style={{ height: "46px" }}>
                                        <td className="u-align-center u-border-1 u-border-grey-dark-1 u-custom-font u-first-column u-heading-font u-table-cell u-table-cell-11">Jenis Tepi</td>
                                        <td className="u-border-1 u-border-grey-dark-1 u-table-cell">{props.tepiProduk}</td>
                                    </tr>
                                    <tr style={{ height: "46px" }}>
                                        <td className="u-align-center u-border-1 u-border-grey-dark-1 u-custom-font u-first-column u-heading-font u-table-cell u-table-cell-13">Jenis Bahan</td>
                                        <td className="u-border-1 u-border-grey-dark-1 u-table-cell">{props.jenisKain}</td>
                                    </tr>
                                    <tr style={{ height: "46px" }}>
                                        <td className="u-align-center u-border-1 u-border-grey-dark-1 u-custom-font u-first-column u-heading-font u-table-cell u-table-cell-15">Kategori</td>
                                        <td className="u-border-1 u-border-grey-dark-1 u-table-cell">{props.kategoriProduk}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button onClick={() => { history.back(-1) }} className="u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-6 u-btn-1">Kembali</button>
                    </div>
                </section>
            </LayoutAdmin>
        </>
    )
}

export default InformasiProduk