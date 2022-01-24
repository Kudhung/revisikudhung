import LayoutSlider from "../component/Main-Layout-Slider"
import prisma from '../client.ts'

export async function getServerSideProps(context) {
    const daftarSlider = await prisma.slider.findMany({
        where: { kategoriSlider: "Beranda", statusSlider: "On" },
    });
    return { props: { daftarSlider } }
}

const InfoPengiriman = ({ daftarSlider }) => {
    return (
        <>
            <link rel="stylesheet" href="/css/Informasi-Pengiriman.css" media="screen" />
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
                <section className="u-clearfix u-section-1" id="sec-966d">
                    <div className="u-clearfix u-sheet u-valign-top u-sheet-1">
                        <h3 className="u-text u-text-default u-text-1">Informasi Pengiriman<span style={{ fontWeight: 700 }}></span>
                        </h3>
                        <p className="u-text u-text-2"> 1. Paket akan dikirimkan pada hari yang sama apabila transfer sebelum jam 14.00
                            wib.&nbsp;<br />
                            <br />2. Apabila transfer setelah jam 14.00 wib, maka paket akan dikirimkan pada hari berikutnya.&nbsp;<br />
                            <br />3. KHUSUS saat launching produk baru, batas transfer maksimal jam 16.00 wib.&nbsp;<br />
                            <br />4. Paket dikirim menggunakan ekspedisi J&amp;T Express (diluar Kabupaten Banyuwangi), dan Kurir Pribadi
                            KUDHUNG (khusus daerah Kabupaten Banyuwangi).&nbsp;<br />
                            <br />5. Perubahan status order dari Pesanan Diproses menjadi Sedang Dikirim akan otomatis berubah setelah diinput
                            pihak admin KUDHUNG.&nbsp;<br />
                            <br />6. Nomor Resi akan dikirimkan otomatis via SMS.
                        </p>
                    </div>
                </section>
            </LayoutSlider>
        </>
    )
}

export default InfoPengiriman