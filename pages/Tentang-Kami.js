import LayoutSlider from "../component/Main-Layout-Slider";
import prisma from '../client.ts'
import Script from 'next/script'

export async function getServerSideProps(context) {
    const daftarSlider = await prisma.slider.findMany({
        where: { kategoriSlider: "Beranda", statusSlider: "On" },
    });
    return { props: { daftarSlider } }
}

const About = ({ daftarSlider }) => {
    return (
        <>
            <link rel="stylesheet" href="/css/Tentang-Kami.css" media="screen" />
            <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></Script>
            <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></Script>
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
                ))}>
                <section className="u-clearfix u-section-1" id="sec-c7e8">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <h3 className="u-custom-font u-font-lato u-text u-text-default u-text-1">Tentang Kami</h3>
                        <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                            <div className="u-layout">
                                <div className="u-layout-row">
                                    <div className="u-container-style u-image u-layout-cell u-size-22 u-image-1" data-image-width="500" data-image-height="500">
                                        <div className="u-container-layout u-container-layout-1"></div>
                                    </div>
                                    <div className="u-align-center u-container-style u-layout-cell u-size-38 u-layout-cell-2">
                                        <div className="u-container-layout u-container-layout-2">
                                            <p className="u-custom-font u-font-lato u-text u-text-2">Merupakan sebuah StartUp yang bergerak dibidang Hijab Fashion. Kami menyediakan berbagai jenis hijab sesuai dengan kebutuhan wanita muslimah dan memberikan pelayanan serta pelayanan yang baik dan cepat;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="u-clearfix u-section-2" id="sec-3772">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
                    <div className="u-clearfix u-sheet u-valign-top-sm u-valign-top-xs u-sheet-1">
                        <div className="u-container-style u-expanded-width-md u-expanded-width-sm u-expanded-width-xs  u-group u-group-1">
                            <div className="u-container-layout">
                                <h2 className="u-custom-font u-font-lato u-text u-text-default u-text-1">
                                    <a className=" u-active-none u-border-none u-btn u-button-link u-button-style u-hover-none u-none u-text-active-palette-1-base u-text-black u-btn-1" data-toggle="tab" href="#tabs-2" role="tab" data-page-id="903119981" style={{ marginRight: "-35%" }}>Cara Pembayaran</a>
                                </h2>
                                <a className="u-btn u-button-link u-button-style u-none u-text-active-palette-1-base u-text-black u-btn-2 role-respon" data-toggle="tab" href="#tabs-1" role="tab" data-page-id="1133208211" >Cara Pemesanan</a>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                <ul className="u-align-left u-custom-font u-custom-list u-font-lato u-text u-text-2" id="tabs-1" role="tabpanel">
                                    <li>
                                        <div className="u-list-icon">
                                            <i className="fas fa-check" style={{ color: "green", fontSize: "25px" }}></i>
                                        </div>Pilih produk yang diinginkan
                                    </li>
                                    <li>
                                        <div className="u-list-icon">
                                            <i className="fas fa-check" style={{ color: "green", fontSize: "25px" }}></i>
                                        </div>Pilih Detail Produk
                                    </li>
                                    <li>
                                        <div className="u-list-icon">
                                            <i className="fas fa-check" style={{ color: "green", fontSize: "25px" }}></i>
                                        </div>Pilih Pesan Sekarang
                                    </li>
                                    <li>
                                        <div className="u-list-icon">
                                            <i className="fas fa-check" style={{ color: "green", fontSize: "25px" }}></i>
                                        </div>Lengkapi data penerima via whatsapp
                                    </li>
                                    <li>
                                        <div className="u-list-icon">
                                            <i className="fas fa-check" style={{ color: "green", fontSize: "25px" }}></i>
                                        </div>Tunggu konfirmasi dari penjual untuk mendapatkan rincian pembayaran
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-pane" id="tabs-2" role="tabpanel">
                                <ul className="u-align-left u-custom-font u-custom-list u-font-lato u-text u-text-2" id="tabs-2" role="tabpanel">
                                    <li>
                                        <div className="u-list-icon">
                                            <i className="fas fa-check" style={{ color: "green", fontSize: "25px" }}></i>
                                        </div>Dapatkan rincian pembayaran untuk pesanan
                                    </li>
                                    <li>
                                        <div className="u-list-icon">
                                            <i className="fas fa-check" style={{ color: "green", fontSize: "25px" }}></i>
                                        </div>Lakukan pembayaran 1 X 24 Jam melalui metode yang disediakan
                                    </li>
                                    <li>
                                        <div className="u-list-icon">
                                            <i className="fas fa-check" style={{ color: "green", fontSize: "25px" }}></i>
                                        </div>Kirim bukti pembayaran via whatsapp
                                    </li>
                                    <li>
                                        <div className="u-list-icon">
                                            <i className="fas fa-check" style={{ color: "green", fontSize: "25px" }}></i>
                                        </div>Pesanan dikemas
                                    </li>
                                    <li>
                                        <div className="u-list-icon">
                                            <i className="fas fa-check" style={{ color: "green", fontSize: "25px" }}></i>
                                        </div>Apabila pembayaran lewat 1 X 24 Jam, maka pesanan otomatis dibatalkan
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutSlider>
        </>
    )
}

export default About;