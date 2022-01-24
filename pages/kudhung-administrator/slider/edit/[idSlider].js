import LayoutAdmin from "../../../../component/Layout-Admin"
import Link from "next/link"
import { useState } from "react"
import { useForm } from 'react-hook-form'
import prisma from '../../../../client.ts'

export async function getServerSideProps(context) {
    const daftarSlider = await prisma.slider.findMany();
    let kode = context.params.idSlider;
    let data = await prisma.slider.findUnique({
        where: { idSlider: Number(kode) },
    });

    let { idSlider, gambarSlider, keteranganSlider, periodeSlider, statusSlider,  kategoriSlider } = data;
    return { props: { idSlider, gambarSlider, keteranganSlider, periodeSlider, statusSlider, kategoriSlider,  daftarSlider } };
}

const Form = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <section className="u-align-center u-clearfix u-section-1" id="sec-e326">
            <div className="u-clearfix u-sheet u-sheet-1">
                <h4 className="u-text u-text-default u-text-1">EDIT SLIDER</h4>
                <div className="u-align-center u-custom-color-1 u-form u-radius-20 u-form-1">
                    <div className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" style={{ padding: "18px" }}>
                        <div  style={{ marginTop: "3%" }} className="u-form-group u-form-textarea u-form-group-9">
                            <label htmlFor="text-c8ee" className="u-label">Gambar
                            </label>
                            <div className=" u-white ">
                                <input
                                    type="file"
                                    id="text-c8ee"
                                    {...register('gambarSlider', { required: false })}
                                    onChange={props.handleFileInputChange}
                                    className=" u-input u-input-rectangle custom-file-input"
                                />
                                <img src={props.gambarSlider} style={{ width: "50%", height: "50%", margin: "2%" }} />
                                <img src={props.gmbrstring} style={{ width: "50%", height: "50%", margin: "2%" }} />
                            </div>
                        </div>
                        <div  style={{ marginTop: "3%" }} className="u-form-group u-form-group-2">
                            <label htmlFor="text-f0b0" className="u-label">Keterangan
                            </label>
                            <br />
                            <p style={{ color: "red", fontSize: "12px", float: "left", marginLeft: "0%", marginTop: "0%" }}>
                                {errors.keteranganSlider?.type === 'required' && "(keterangan Kosong)"}
                            </p>
                            <input
                                type="text"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-2"
                                style={{ marginTop: "0%" }}
                                placeholder="Keterangan Slider"
                                id="keteranganSlider"
                                {...register('keteranganSlider', { required: false })}
                                value={props.keteranganSlider}
                                onChange={(Event) => props.setKeteranganSlider(Event.target.value)}
                            />
                        </div>
                        <div  style={{ marginTop: "3%" }} className="u-form-group u-form-group-3">
                            <label htmlFor="text-2398" className="u-label">Periode
                            </label>
                            <br />
                            <p style={{ color: "red", fontSize: "12px", float: "left", marginLeft: "0%", marginTop: "0%" }}>
                                {errors.periodeSlider?.type === 'required' && "(Periode Slider Kosong)"}
                            </p>
                            <input
                                type="text"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-3"
                                style={{ marginTop: "0%" }}
                                placeholder="Periode Slider"
                                id="periodeSlider"
                                {...register('periodeSlider', { required: false })}
                                value={props.periodeSlider}
                                onChange={(Event) => props.setPeriodeSlider(Event.target.value)}
                            />
                        </div>
                        <div  style={{ marginTop: "3%" }} className="u-form-group u-form-select u-form-group-8">
                            <label htmlFor="select-72c2" className="u-label">Kategori
                            </label>
                            <br />
                            <p style={{ color: "red", fontSize: "12px", float: "left", marginLeft: "0%", marginTop: "0%" }}>
                                {errors.kategoriSlider?.type === 'required' && "(Pilih Kategori Slider)"}
                            </p>
                            <select
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-8"
                                style={{ marginTop: "0%" }}
                                {...register('kategoriSlider', { required: true })}
                                value={props.kategoriSlider}
                                onChange={(Event) => props.setKategoriSlider(Event.target.value)}
                            >

                                <option label="Pilih Kategori Slider">{false}</option>
                                <option value="Beranda">1. Beranda</option>
                                <option value="Sale">2. Sale</option>
                                <option value="Bundling">3. Bundling</option>
                                <option value="Produk">4. Produk</option>
                            </select>
                        </div>
                        <div  style={{ marginTop: "3%" }} className="u-form-group u-form-select u-form-group-8">
                            <label htmlFor="select-72c2" className="u-label">Status
                            </label>
                            <br />
                            <p style={{ color: "red", fontSize: "12px", float: "left", marginLeft: "0%", marginTop: "0%" }}>
                                {errors.statusSlider?.type === 'required' && "(Pilih Status Slider)"}
                            </p>
                            <select
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-8"
                                style={{ marginTop: "0%" }}
                                {...register('statusSlider', { required: true })}
                                value={props.statusSlider}
                                onChange={(Event) => props.setStatusSlider(Event.target.value)}
                            >

                                <option label="Pilih Status Slider">{false}</option>
                                <option value="On">On</option>
                                <option value="Off">Off</option>
                            </select>
                        </div>
                        <div className="u-align-left u-form-group u-form-submit">
                            <button className="button-simpan button2"
                                onClick={handleSubmit(props.onClick)}><span>Edit
                                </span></button>

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
const EditSlider = (props) => {
    const [gambarSlider, setGambarSlider] = useState(props.gambarSlider)
    const [keteranganSlider, setKeteranganSlider] = useState(props.keteranganSlider)
    const [periodeSlider, setPeriodeSlider] = useState(props.periodeSlider)
    const [statusSlider, setStatusSlider] = useState(props.statusSlider)
    const [kategoriSlider, setKategoriSlider] = useState(props.kategoriSlider)
    const [base64URL, setBase64] = useState([])
    const [gmbrstring, setGmbrString] = useState(props.gambarSlider)

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
        let { file } = base64URL;

        file = e.target.files[0];
        getBase64(file)
            .then(result => {
                let filebase64 = file["base64"] = Buffer.from(result).toString('base64')
                let filestring = file["stringimage"] = Buffer.from(filebase64, 'base64').toString()
                setBase64(filebase64)
                setGmbrString(filestring)
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <>
            <LayoutAdmin>
                <link rel="stylesheet" href="/css/Edit-Slider.css" media="screen" />
                <Form
                    gambarSlider={gambarSlider} setGambarSlider={setGambarSlider}
                    keteranganSlider={keteranganSlider} setKeteranganSlider={setKeteranganSlider}
                    periodeSlider={periodeSlider} setPeriodeSlider={setPeriodeSlider}
                    statusSlider={statusSlider} setStatusSlider={setStatusSlider}
                    kategoriSlider={kategoriSlider} setKategoriSlider={setKategoriSlider}

                    gmbrstring={gmbrstring}
                    handleFileInputChange={handleFileInputChange}
                    onClick={async (data) => {
                        const slider = {
                            gambarSlider: gmbrstring,
                            keteranganSlider: data.keteranganSlider,
                            periodeSlider: data.periodeSlider,
                            statusSlider: data.statusSlider,
                            kategoriSlider: data.kategoriSlider,
                            idSlider: props.idSlider
                        };
                        try {
                            const respon = await fetch('/api/Slider/Update', {
                                method: 'POST',
                                body: JSON.stringify(slider),
                            });
                            if (!respon.ok) throw new Error(respon.statusText);
                            let status = await respon.json();
                            if (status !== null) {
                                window.history.back()
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    }}
                />
            </LayoutAdmin>
        </>
    )
}

export default EditSlider