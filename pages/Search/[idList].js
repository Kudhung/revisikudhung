import LayoutSlider from "../../component/Main-Layout-Slider"
import Link from 'next/link'
import prisma from '../../client.ts'


export async function getServerSideProps(context) {
    const daftarSlider = await prisma.slider.findMany({
      where: { kategoriSlider: "Beranda", statusSlider: "On" },
    });
    let kode = context.params.idList;
    let data = await prisma.produk.findMany({
        where: { kategoriProduk: kode },
    });
    return { props: { data, kode, daftarSlider } };
}

const ListSearch = (props) => {
    let produk;
    if (props.statusProduk == "Normal") {
        produk = (
            <div className="u-custom-font u-font-lato u-product-control u-product-price u-product-price-1">
                <div className="u-price-wrapper u-spacing-10">
                    <div className="u-price u-text-palette-2-base" style={{ fontSize: "1.10rem", fontWeight: "700" }}>
                        {props.hargaProduk}
                    </div>
                </div>
            </div>
        )
    } else {
        produk = (
            <div className="u-custom-font u-font-lato u-product-control u-product-price u-product-price-1">
                <div className="u-price-wrapper u-spacing-10">
                    <div className="u-old-price" style={{ fontSize: "1rem", textDecoration: "line-through " }}>
                        {props.hargaProduk}
                    </div>
                    <div className="u-price u-text-palette-2-base" style={{ fontSize: "1.10rem", fontWeight: "700" }}>
                        {props.hargaSale}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
          <img alt="" className="u-expanded-width u-image u-image-default u-product-control u-image-1"
            src={props.gambar1Produk} />
          <div className="u-align-center u-custom-font u-font-lato u-product-control u-text u-text-2 u-product-title-link">
            {props.namaProduk}
          </div>
          {produk}
            <Link href="/Produk/Deskripsi/[namaProduk]" as={`/Produk/Deskripsi/${props.namaProduk}`}>
                <a
                    className="u-border-2 u-border-grey-25 u-btn u-btn-rectangle u-button-style u-none u-product-control u-text-body-color u-btn-1">
                    LIHAT PRODUK
                </a>
            </Link>
        </div>
    )
}

const Search = ({ data, kode, daftarSlider }) => {
    return (
        <>
            <link rel="stylesheet" href="/css/Search.css" media="screen" />
            <LayoutSlider
                childrenSlider=
                {daftarSlider.map((slider) => (
                    <div key={slider.idSlider} className="u-carousel-item u-effect-fade u-gallery-item u-carousel-item-2">
                        <div className="u-back-slide" data-image-width="500" data-image-height="500">
                            <img className="u-back-image u-expanded" src={slider.gambarSlider} />
                        </div>
                        <div className="u-align-center u-over-slide u-shading u-valign-bottom u-over-slide-2">
                            <h3 className="u-gallery-heading">{slider.keteranganSlider}</h3>
                            <p className="u-gallery-text">{slider.periodeSlider}</p>
                        </div>
                    </div>
                )
                )}

                childrenCircle=
                {daftarSlider.map((circle) => (
                    <li key={circle.idSlider} data-u-target="#carousel-80dd" data-u-slide-to="1" className="u-grey-70 u-shape-circle"
                        style={{ width: "10px", height: "10px" }}></li>
                ))}
            >
                <section className="u-align-center u-clearfix u-section-1" id="sec-f5eb">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <p className="u-text u-text-default u-text-1" >Hasil Pencarian : {kode}</p>
                        <div className="u-expanded-width u-products u-products-1">
                            <div className="u-repeater u-repeater-1">
                                {/* List Search */}
                                {data.map((file) => (
                                    <div className="u-align-center u-container-style u-products-item u-repeater-item" key={file.idProduk}>
                                        <ListSearch
                                            namaProduk={file.namaProduk}
                                            hargaProduk={file.hargaProduk}
                                            hargaSale={file.hargaSale}
                                            gambar1Produk={file.gambar1Produk}
                                            statusProduk={file.statusProduk}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutSlider>
        </>
    )
}

export default Search