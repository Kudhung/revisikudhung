import LayoutDeskripsi from "../../../component/Main-Layout-Deskripsi"
import { useState, useEffect } from "react"
import prisma from '../../../client.ts'
import Link from "next/link"

export async function getServerSideProps(context) {
    const daftarBundling = await prisma.bundling.findMany();
    let kode = context.params.namaBundling;
    let data = await prisma.bundling.findUnique({
        where: { namaBundling: kode },
    });

    let { idBundling, namaBundling, gambar1Bundling, gambar2Bundling, hargaBundling, DeskripsiBundling, keteranganGambar1, keteranganGambar2 } = data;
    return { props: { idBundling, namaBundling, gambar1Bundling, gambar2Bundling, hargaBundling, DeskripsiBundling, keteranganGambar1, keteranganGambar2, daftarBundling, kode } };
}

const DeskripsiProduk = (props) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filters, setFilters] = useState({
        page: 1
    });
    const [lastPage, setLastPage] = useState(0);
    const perPage = 7;
    const [namaBundling] = useState(props.namaBundling);
    const [hargaBundling] = useState(props.hargaBundling);
    const [deskripBundling]=useState(props.DeskripsiBundling)


    useEffect(() => {
        (
            async () => {
                setFilteredProducts(props.daftarBundling.slice(0, filters.page * perPage))
                setLastPage(Math.ceil(props.daftarBundling.length / perPage))
            }
        )()
    }, [filters]);

    useEffect(() => {
        setLastPage(Math.ceil(props.daftarBundling.length / perPage));
        setFilteredProducts(props.daftarBundling.slice(0, filters.page * perPage));
    }, [filters]);

    const loadMore = () => {
        setFilters({
            filters,
            page: filters.page + 1
        });
    }


    let button;
    if (filters.page !== lastPage) {
        button = (
            <button className="btn third" onClick={loadMore}>Load More</button>
        )
    }

    const Pesan = () => {
        /* Whatsapp Window Open */
            window.open('https://wa.me/send' + '?phone=' + '6283857247099'  + '&text='+ 'Halo saya ingin memesan'+ '%20' + '%20' + namaBundling + '%20' + '(' + '%20' + '*' + hargaBundling + '*' + '%20' + ')' + '%0A' +
                '*Informasi Paket Bundling : ' + '%20' + deskripBundling +'*'+ '%0A%0A' +
                '*' + 'Isi Form Penerima' + '*' + '%0A' +
                '*Name : ' + '%0A' +
                '*No Telp : ' + '%0A' +
                '*Alamat : ' + '%0A' +
                '*Email Aktif : ' + '%0A' +
                '*Jumlah Barang : ');
    };


    return (
        <>
            <LayoutDeskripsi>
                <link rel="stylesheet" href="/css/Deskripsi-Produk.css" media="screen" />
                <section className="u-align-center u-clearfix u-section-1" data-u-ride="carousel" id="sec-eeea">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <div className="back-button">
                            <i className="fas fa-chevron-left" onClick={() => (history.back(location.reload()))}></i>
                        </div>
                        <h3 className="u-custom-font u-font-lato u-text u-text-default u-text-1">Detail Produk</h3>
                        <div className="u-container-style u-expanded-width u-product u-product-1 deskripsi">
                            <div className="u-container-layout u-valign-middle-xl u-container-layout-1">
                                <div
                                    className="u-carousel u-gallery u-layout-thumbnails u-lightbox u-no-transition u-product-control u-show-text-none u-thumbnails-position-left u-gallery-1"
                                    data-interval="5000" data-u-ride="carousel" id="carousel-0c74">
                                    <div className="u-carousel-inner u-gallery-inner" role="listbox">
                                        <div className="u-active u-carousel-item u-gallery-item">
                                            <div className="u-back-slide">
                                                <img className="u-back-image u-expanded" src={props.gambar1Bundling} />
                                            </div>
                                            <p className="u-gallery-text">{props.keteranganGambar1}</p>
                                        </div>
                                        <div className="u-carousel-item u-effect-fade u-gallery-item u-carousel-item-2">
                                            <div className="u-back-slide" data-image-width="500" data-image-height="500">
                                                <img className="u-back-image u-expanded" src={props.gambar2Bundling} />
                                            </div>
                                            <p className="u-gallery-text">{props.keteranganGambar2}</p>
                                        </div>
                                    </div>

                                    <a className="u-absolute-vcenter u-carousel-control u-carousel-control-prev u-icon-rectangle u-opacity u-opacity-70 u-spacing-10 u-text-hover-grey-80 u-white u-carousel-control-1"
                                        href="#carousel-0c74" role="button" data-u-slide="prev">
                                        <span aria-hidden="true">
                                            <i className="fas fa-chevron-left" style={{ fontSize: "25px", marginTop: "-2px", marginLeft: "-3px" }}></i>

                                        </span>
                                        <span className="sr-only">
                                            <i className="fas fa-chevron-left" style={{ fontSize: "25px", marginTop: "-2px", marginLeft: "-3px" }}></i>

                                        </span>
                                    </a>
                                    <a className="u-absolute-vcenter u-carousel-control u-carousel-control-next u-icon-rectangle u-opacity u-opacity-70 u-spacing-10 u-text-hover-grey-80 u-white u-carousel-control-2"
                                        href="#carousel-0c74" role="button" data-u-slide="next">
                                        <span aria-hidden="true">
                                            <i className="fas fa-chevron-right" style={{ fontSize: "25px", marginTop: "-2px", marginLeft: "-3px" }}></i>

                                        </span>
                                        <span className="sr-only">
                                            <i className="fas fa-chevron-right" style={{ fontSize: "25px", marginTop: "-2px", marginLeft: "-3px" }}></i>

                                        </span>
                                    </a>

                                    <ol className="u-carousel-thumbnails u-spacing-15 u-vertical-spacing u-carousel-thumbnails-1" >
                                        <li className="u-active u-carousel-thumbnail u-carousel-thumbnail-1" data-u-target="#carousel-0c74"
                                            data-u-slide-to="0">
                                            <img className="u-carousel-thumbnail-image u-image " src={props.gambar1Bundling} />
                                        </li>
                                        <li className="u-carousel-thumbnail u-carousel-thumbnail-2" data-u-target="#carousel-0c74"
                                            data-u-slide-to="1">
                                            <img className="u-carousel-thumbnail-image u-image" src={props.gambar2Bundling} />
                                        </li>
                                    </ol>
                                </div>
                                <div className="div-tambahan">
                                    <div className="u-align-left u-custom-font u-font-lato u-product-control u-text u-text-2 u-product-title-link font-div">
                                        <span>{props.namaBundling}</span>
                                    </div>
                                    <div className="u-custom-font u-font-lato u-product-control u-product-price u-product-price-1">
                                        <div className="u-price-wrapper u-spacing-10">
                                            <div className="u-price u-text-palette-2-base" style={{ fontSize: "1.875rem", fontWeight: "bolder" }}>
                                                {props.hargaBundling}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="u-align-left u-custom-font u-font-lato u-product-control u-product-desc u-text u-text-3">
                                        <span className="span-deskripsi">{props.DeskripsiBundling}</span>
                                    </div>
                                    <button
                                        className="u-border-2 u-border-black u-btn u-button-style u-custom-font u-font-lato u-hover-black u-none u-product-control u-text-black u-text-hover-white u-btn-1" onClick={Pesan}>
                                        Pesan Sekarang
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="u-align-center u-clearfix u-section-2" id="sec-6c33">
                    <div
                        className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-sheet-1">
                        <p className="u-text u-text-default u-text-1">Terkait</p>
                        <div
                            className="u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-layout-vertical u-products u-products-1">
                            <div className="u-repeater u-repeater-1">
                                {filteredProducts.map((terkait) => {

                                    let hiddenList;
                                    if (terkait.namaBundling == props.kode) {
                                        hiddenList = true
                                    } else {
                                        hiddenList = false
                                    }
                                    return (
                                        <div className=" u-white u-repeater-item-1 u-container-layout u-similar-container u-container-layout-1" hidden={hiddenList} key={terkait.idBundling} >
                                            <img alt="" className="u-align-center u-image u-image-default u-product-control u-image-1" src={terkait.gambar1Bundling} />
                                            <h4 className="u-product-control u-text u-text-2">
                                                <label className="u-product-title-link" >
                                                    {terkait.namaBundling}
                                                </label>
                                            </h4>
                                            <div className="u-product-control u-product-price u-product-price-1">
                                                <div className="u-custom-font u-font-lato u-product-control u-product-price u-product-price-1">
                                                    <div className="u-price-wrapper u-spacing-10">
                                                        <div className="u-old-price">
                                                        </div>
                                                        <div className="u-price u-text-palette-2-base" style={{ fontSize: "1.10rem", fontWeight: "bolder", marginLeft: "0%" }}>
                                                            <b>{terkait.hargaBundling}</b>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link href="/Bundling/Deskripsi/[namaBundling]" as={`/Bundling/Deskripsi/${terkait.namaBundling}`}>
                                                <a
                                                    className="u-border-2 u-border-grey-25 u-btn u-btn-rectangle u-button-style u-none u-product-control u-text-body-color u-btn-1">
                                                    Detail Produk
                                                </a>
                                            </Link>
                                        </div>
                                    )
                                }
                                )}

                            </div>
                        </div>
                        {button}
                    </div>
                </section>

            </LayoutDeskripsi>
        </>
    )
}

export default DeskripsiProduk