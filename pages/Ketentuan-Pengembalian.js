import LayoutSlider from "../component/Main-Layout-Slider"
import prisma from '../client.ts'

export async function getServerSideProps(context) {
    const daftarSlider = await prisma.slider.findMany({
        where: { kategoriSlider: "Beranda", statusSlider: "On" },
    });
    return { props: { daftarSlider } }
}

const KetentuanPengembalian = ({daftarSlider}) => {
    return (
        <>
            <link rel="stylesheet" href="/css/Ketentuan-Pengembalian.css" media="screen" />
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
                <section className="u-clearfix u-section-1" id="sec-35a1">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <h3 className="u-text u-text-default u-text-1">Pengembalian Dana dan Barang</h3>
                        <p className="u-align-justify u-text u-text-2"> Kami selalu berusaha memberikan yang terbaik untuk konsumen. Namun,
                            apabila kamu mendapatkan produk yang tidak sesuai dengan standar Quality Control kami, maka kamu tidak perlu
                            khawatir! Kami pasti bertanggung jawab.
                            Selama kamu memiliki VIDEO UNBOXING PAKET KUDHUNG, maka kamu bisa melakukan pengembalian produk MAKS 3 HARI
                            setelah menerima produk. Jika lebih dari batas waktu yang sudah ditentukan dan tidak disertai video unboxing,
                            maka mohon maaf produk tersebut tidak bisa ditukar/dikembalikan.&nbsp;<br />
                            <br />Untuk proses Retur/Refund, bisa langsung hubungi WhatsApp ke nomor +62 812-3456-7899.
                        </p>
                        <p className="u-align-justify u-text u-text-3">
                            <span style={{ fontSize: "1.625rem", textDecoration: "underline !important" }}>Ketentuan :&nbsp;</span>
                            <br />
                            <br />1. Produk yang dapat kamu tukar adalah sebagai berikut:&nbsp;<br />• Tidak sesuai dengan pesanan (kesalahan
                            pengiriman).&nbsp;<br />• Produk yang rusak / cacat produksi.&nbsp;<br />• Produk yang telah dibeli out of
                            stock.&nbsp;<br />
                            <br />2. Produk yang tidak dapat ditukar adalah&nbsp;<br />• Produk tidak sesuai dengan keinginan pembeli / model
                            kurang cocok.&nbsp;<br />• Produk rusak / cacat karena kesalahan konsumen<br />
                            <br />3. Produk yang ingin dikembalikan harus dalam kondisi yang sama seperti pada saat diantarkan, termasuk
                            kemasannya.&nbsp;<br />
                            <br />4. Produk harus dalam keadaan belum terpakai atau dicuci.&nbsp;
                        </p>
                    </div>
                </section>
            </LayoutSlider>
        </>
    )
}

export default KetentuanPengembalian