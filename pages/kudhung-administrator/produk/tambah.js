import LayoutAdmin from "../../../component/Layout-Admin"
import Link from "next/link"
import { useState } from "react"
import { useForm } from 'react-hook-form'
import prisma from '../../../client.ts'

export async function getServerSideProps(context) {
    const daftarKategori = await prisma.kategori.findMany();
    const daftarProduk = await prisma.produk.findMany();

    return {
        props: {
            daftarKategori: daftarKategori,
            daftarProduk: daftarProduk
        }
    }
}
const Form = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <section className="u-align-center u-clearfix u-section-1" id="sec-e326">
            <div className="u-clearfix u-sheet u-sheet-1">
                <h4 className="u-text u-text-default u-text-1">PRODUK</h4>
                <div className="u-align-center u-custom-color-1 u-form u-radius-20 u-form-1">
                    <div className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="form" style={{ padding: "18px" }}>
                        <div style={{ marginTop: "3%" }} className="u-form-group u-form-group-1">
                            <label htmlFor="text-8ddb" className="u-label">Nama Produk
                            </label>
                            <br />
                            <p style={{ color: "red", fontSize: "12px", float: "left", marginLeft: "0%", marginTop: "0%" }}>
                                {errors.namaProduk?.type === 'required' && "(Nama Produk Kosong)"}
                            </p>
                            <input
                                type="text"
                                placeholder="Masukkan Nama Produk"
                                id="text-8ddb"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-1"
                                {...register('namaProduk', { required: true })}
                            />
                        </div>
                        <div style={{ marginTop: "3%" }} className="u-form-group u-form-group-2">
                            <label htmlFor="text-f0b0" className="u-label">Jenis Kain / Bahan
                            </label>
                            <br />
                            <p style={{ color: "red", fontSize: "12px", float: "left", marginLeft: "0%", marginTop: "0%" }}>
                                {errors.jenisKain?.type === 'required' && "(Jenis Kain / Bahan Kosong)"}
                            </p>
                            <input
                                type="text"
                                placeholder="Masukkan Jenis Kain"
                                id="text-f0b0"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-2"
                                {...register('jenisKain', { required: true })}
                            />
                        </div>
                        <div style={{ marginTop: "3%" }} className="u-form-group u-form-group-3">
                            <label htmlFor="text-2398" className="u-label">Harga Produk
                            </label>
                            <br />
                            <p style={{ color: "red", fontSize: "12px", float: "left", marginLeft: "0%", marginTop: "0%" }}>
                                {errors.hargaProduk?.type === 'required' && "(Harga Produk Kosong)"}
                            </p>
                            <input
                                type="text"
                                placeholder="Masukkan Harga Produk"
                                id="text-2398"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-3"
                                {...register('hargaProduk', { required: true })}
                            />
                        </div>
                        <div style={{ marginTop: "3%" }} className="u-form-group u-form-group-4">
                            <label htmlFor="text-dcdb" className="u-label">Harga Sale
                            </label>
                            <br />
                            <p style={{ color: "red", fontSize: "12px", float: "left", marginLeft: "0%", marginTop: "0%" }}>
                                {errors.hargaSale?.type === 'required' && "(Harga Sale Kosong)"}
                            </p>
                            <input
                                type="text"
                                placeholder="Masukkan Harga Sale"
                                id="hargaSale"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-4"
                                {...register('hargaSale', { required: false })}
                            />
                        </div>
                        <div style={{ marginTop: "3%" }} className="u-form-group u-form-select u-form-group-8">
                            <label htmlFor="select-72c2" className="u-label">Jenis Tepi
                            </label>
                            <br />
                            <p style={{ color: "red", fontSize: "12px", float: "left", marginLeft: "0%", marginTop: "0%" }}>
                                {errors.jenisTepi?.type === 'required' && "(Pilih Jenis Tepi)"}
                            </p>
                            <select
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-8"
                                {...register('jenisTepi', { required: true })}
                            >
                                <option label="Pilih Jenis Tepi">{false}</option>
                                <option value="-">Accessories</option>
                                <option value="Baby Seam / Kelim">1. Baby Seam / Kelim</option>
                                <option value="Wolsum / Neci">2. Wolsum / Neci</option>
                                <option value="Eyelash">3. Eyelash</option>
                                <option value="Rawis">4. Rawis</option>
                                <option value="Double Line">5. Double Line</option>
                                <option value="Laser Cut">6. Laser Cut</option>
                                <option value="Tepi Jahit">7. Tepi Jahit</option>
                            </select>
                        </div>
                        <div style={{ marginTop: "3%" }} className="u-form-group u-form-select u-form-group-8">
                            <label htmlFor="select-72c2" className="u-label">Ukuran Produk
                            </label>
                            <br />
                            <p style={{ color: "red", fontSize: "12px", float: "left", marginLeft: "0%", marginTop: "0%" }}>
                                {errors.ukuranProduk?.type === 'required' && "(Pilih Ukuran Produk)"}
                            </p>
                            <select
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-8"
                                {...register('ukuranProduk', { required: true })}
                            >
                                <option label="Pilih Ukuran">{false}</option>
                                <option value="-">Accessories</option>
                                <optgroup label="Khimar">
                                    <option value="XS">1. XS</option>
                                    <option value="S">2. S</option>
                                    <option value="M">3. M</option>
                                    <option value="L">4. L</option>
                                    <option value="XL">5. XL</option>
                                    <option value="XXL">6. XXL</option>
                                </optgroup>
                                <optgroup label="Pashmina">
                                    <option value="160 cm X 50 cm (Standart)">1. 160 cm X 50 cm (Standart)</option>
                                    <option value="190 cm X 75 cm (Standart)">2. 190 cm X 75 cm (Standart)</option>
                                    <option value="75 cm X 200 cm ( Syar&apos;i)">3. 75 cm X 200 cm ( Syar&apos;i)</option>
                                    <option value="200 cm X 150 cm (Syar&apos;i)">4. 200 cm X 150 cm (Syar&apos;i)</option>
                                    <option value="30 cm X 150 cm">5. 30 cm X 150 cm </option>
                                    <option value="180 cm X 70 cm">6. 180 cm X 70 cm </option>
                                    <option value="180 cm X 75 cm">6. 180 cm X 75 cm </option>
                                </optgroup>
                                <optgroup label="Segiempat">
                                    <option value="115 cm X 115 cm (Standart)">1. 115 cm X 115 cm (Standart)</option>
                                    <option value="140 cm X 140 cm ( Syar&apos;i)">2. 140 cm X 140 cm ( Syar&apos;i)</option>
                                    <option value="102 cm X 102 cm">3. 102 cm X 102 cm </option>
                                    <option value="100 cm X 150 cm">4. 100 cm X 150 cm </option>
                                </optgroup>
                            </select>
                        </div>
                        <div style={{ marginTop: "3%" }} className="u-form-group u-form-select u-form-group-8">
                            <label htmlFor="select-72c2" className="u-label">Status Produk
                            </label>
                            <br />
                            <p style={{ color: "red", fontSize: "12px", float: "left", marginLeft: "0%", marginTop: "0%" }}>
                                {errors.statusProduk?.type === 'required' && "(Pilih Status Produk)"}
                            </p>
                            <select
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-8"
                                {...register('statusProduk', { required: true })}
                            >
                                <option label="Pilih Status Produk">{false}</option>
                                <option value="Sale">1. Sale</option>
                                <option value="Normal">2. Normal</option>
                            </select>
                        </div>
                        <div style={{ marginTop: "3%" }} className="u-form-group u-form-select u-form-group-8">
                            <label htmlFor="select-72c2" className="u-label">Kategori
                            </label>
                            <br />
                            <p style={{ color: "red", fontSize: "12px", float: "left", marginLeft: "0%", marginTop: "0%" }}>
                                {errors.kategoriProduk?.type === 'required' && "(Pilih Kategori)"}
                            </p>
                            <select
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-8"
                                {...register('kategoriProduk', { required: true })}
                            >
                                <option label="Pilih Kategori">{false}</option>
                                {props.daftarKategori.map((kategori, i = 0) => (
                                    <option value={kategori.jenisKtg} key={kategori.idKtg}>{i + 1}.{kategori.jenisKtg}</option>
                                ))}
                            </select>
                        </div>
                        <div className="u-form-group u-form-textarea u-form-group-9">
                            <label htmlFor="textarea-8259" className="u-label">Deskripsi Produk
                            </label>
                            <br />
                            <p style={{ color: "red", fontSize: "12px", float: "left", marginLeft: "0%", marginTop: "0%" }}>
                                {errors.deskripsiProduk?.type === 'required' && "(Deskripsi Produk Kosong)"}
                            </p>
                            <textarea
                                rows="4"
                                cols="50"
                                id="textarea-8259"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-9"
                                placeholder="Tulis Deskripsi Produk"
                                {...register('deskripsiProduk', { required: true })}
                            />
                        </div>
                        <div className="u-clearfix u-form-spacing-10 u-form-horizontal u-inner-form " style={{ marginTop: "2%", marginLeft: "0%", marginRight: "-1%" }}>
                            <div className="u-form-group u-form-select u-form-group-8" style={{ width: "100%", marginTop: "3%" }}>
                                <div className=" u-white " style={{ marginRight: "1%", width: "50%" }}>
                                    <label htmlFor="text-c8ee" className="u-label"><b>Gambar Produk</b></label>
                                    <label htmlFor="text-c908" className="u-label" style={{ float: "left", marginLeft: "3%", marginTop: "10%" }} >Keterangan Gambar
                                    </label>
                                    <br />
                                    <br />
                                    <br />
                                    <p style={{ color: "red", fontSize: "12px", float: "left", marginLeft: "3%", marginTop: "-4%" }}>
                                        {errors.keteranganGambar1?.type === 'required' && "(Keterangan Gambar Kosong)"}
                                    </p>
                                    <input
                                        type="text"
                                        placeholder="Masukkan Keterangan Gambar"
                                        id="text-c908"
                                        className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-7"
                                        {...register('keteranganGambar1', { required: true })}
                                        style={{ textAlign: "center", marginLeft: "3%", width: "80%" }}
                                    />
                                    <p style={{ color: "red", fontSize: "12px", marginTop: "10%", marginLeft: "3%", marginBottom: "0%" }}>
                                        {errors.gambar1?.type === 'required' && "(Pilih Gambar Produk)"}
                                    </p>
                                    <input
                                        type="file"
                                        id="text-c8ee"
                                        {...register('gambar1', { required: true })}
                                        onChange={props.handleFileInputChange}
                                        className="  u-input-rectangle custom-file-input"
                                    />
                                    <img src={props.gmbrstring1} className="gambar-gambar" />
                                </div>
                                <div className=" u-white " style={{ marginLeft: "1%", width: "50%" }}>
                                    <label htmlFor="text-c8ee" className="u-label"><b>Gambar Produk</b></label>
                                    <label htmlFor="text-c908" className="u-label" style={{ float: "left", marginLeft: "3%", marginTop: "10%" }} >Keterangan Gambar
                                    </label>
                                    <br />
                                    <br />
                                    <br />
                                    <p style={{ color: "red", fontSize: "12px", float: "left", marginLeft: "3%", marginTop: "-4%" }}>
                                        {errors.keteranganGambar2?.type === 'required' && "(Keterangan Gambar Kosong)"}
                                    </p>
                                    <input
                                        type="text"
                                        placeholder="Masukkan Keterangan Gambar"
                                        id="text-c908"
                                        name="text-6"
                                        className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-7"
                                        {...register('keteranganGambar2', { required: true })}
                                        style={{ textAlign: "center", marginLeft: "3%", width: "80%" }}
                                    />
                                    <p style={{ color: "red", fontSize: "12px", marginTop: "10%", marginLeft: "3%", marginBottom: "0%" }}>
                                        {errors.gambar2?.type === 'required' && "(Pilih Gambar Produk)"}
                                    </p>
                                    <input
                                        type="file"
                                        id="text-c8ee"
                                        {...register('gambar2', { required: true })}
                                        onChange={props.handleFileInputChange2}
                                        className=" u-input-rectangle custom-file-input"
                                    />
                                    <img src={props.gmbrstring2} className="gambar-gambar" />
                                </div>
                            </div>
                        </div>
                        <div className="u-align-left u-form-group u-form-submit">
                            <button
                                className="button-simpan button2"
                                onClick={handleSubmit(props.onClick)}
                            ><span>
                                    Simpan
                                </span>
                            </button>
                            <Link href='/kudhung-administrator'>
                                <button className="button-batal button2"><span>Batal
                                </span></button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}
const CreateProduk = (props) => {
    const [dataProduk, setDataProduk] = useState(props.daftarProduk)
    const [base64URL1, setBase641] = useState([])
    const [gmbrstring1, setGmbrString1] = useState(" ")
    const [base64URL2, setBase642] = useState([])
    const [gmbrstring2, setGmbrString2] = useState(" ")

    const getBase64 = (file) => {
        return new Promise(resolve => {
            let baseURL = "";
            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                baseURL = reader.result;
                resolve(baseURL);
            };
        });
    };


    const handleFileInputChange = (e) => {
        let { file } = base64URL1;

        file = e.target.files[0];
        getBase64(file)
            .then(result => {
                let filebase64 = file["base64"] = Buffer.from(result).toString('base64')
                let filestring = file["stringimage"] = Buffer.from(filebase64, 'base64').toString()
                setBase641(filebase64)
                setGmbrString1(filestring)
            })
            .catch(err => {
                console.log(err);
            });
    };

    const handleFileInputChange2 = (e) => {
        let { file } = base64URL2;

        file = e.target.files[0];
        getBase64(file)
            .then(result => {
                let filebase64 = file["base64"] = Buffer.from(result).toString('base64')
                let filestring = file["stringimage"] = Buffer.from(filebase64, 'base64').toString()
                setBase642(filebase64)
                setGmbrString2(filestring)
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <>
            <LayoutAdmin>
                <link rel="stylesheet" href="/css/Edit-Produk-1.css" media="screen" />
                <Form
                    gmbrstring1={gmbrstring1}
                    gmbrstring2={gmbrstring2}
                    handleFileInputChange={handleFileInputChange}
                    handleFileInputChange2={handleFileInputChange2}
                    daftarKategori={props.daftarKategori}
                    onClick={async (data) => {
                        const produk = {
                            namaProduk: data.namaProduk,
                            jenisKain: data.jenisKain,
                            hargaProduk: data.hargaProduk,
                            hargaSale: data.hargaSale,
                            deskripsiProduk: data.deskripsiProduk,
                            statusProduk: data.statusProduk,
                            gambar1Produk: gmbrstring1,
                            keteranganGambar1: data.keteranganGambar1,
                            gambar2Produk: gmbrstring2,
                            keteranganGambar2: data.keteranganGambar2,
                            kategoriProduk: data.kategoriProduk,
                            tepiProduk: data.jenisTepi,
                            ukuranProduk: data.ukuranProduk
                        };
                        try {
                            const respon = await fetch('/api/Produk/Create', {
                                method: 'POST',
                                body: JSON.stringify(produk),
                            });

                            if (!respon.ok) throw new Error(respon.statusText);
                            let status = await respon.json();
                            if (status !== null) {
                                setDataProduk([...dataProduk, produk]);
                                history.back()
                            }
                        } catch (err) {
                            console.log(err)
                        }
                    }}
                />
            </LayoutAdmin>
        </>
    )
}

export default CreateProduk