import LayoutAdmin from "../../../../component/Layout-Admin"
import Link from "next/link"
import { useState } from "react"
import { useForm } from 'react-hook-form'
import prisma from '../../../../client.ts'

export async function getServerSideProps(context) {
    const daftarBundling = await prisma.bundling.findMany();
    let kode = context.params.idBundling;
    let data = await prisma.bundling.findUnique({
        where: { idBundling: Number(kode) },
    });

    let { idBundling, namaBundling, gambar1Bundling, keteranganGambar1, gambar2Bundling, keteranganGambar2, hargaBundling, DeskripsiBundling } = data;
    return { props: { idBundling, namaBundling, gambar1Bundling, keteranganGambar1, gambar2Bundling, keteranganGambar2, hargaBundling, DeskripsiBundling, daftarBundling } };
};

const Form = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <section className="u-align-center u-clearfix u-section-1" id="sec-e326">
            <div className="u-clearfix u-sheet u-sheet-1">
                <h4 className="u-text u-text-default u-text-1">EDIT BUNDLING</h4>
                <div className="u-align-center u-custom-color-1 u-form u-radius-20 u-form-1">
                    <div className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form" source="custom" name="form" style={{ padding: "18px" }}>
                        <div style={{ marginTop: "3%" }} className="u-form-group u-form-group-1">
                            <label htmlFor="text-8ddb" className="u-label">Nama Bundling</label>
                            <br />
                            <p style={{ color: "red", fontSize: "12px", float: "left", marginLeft: "0%", marginTop: "0%" }}>
                                {errors.namaBundling?.type === 'required' && "(Nama Bundling Kosong)"}
                            </p>
                            <input
                                type="text"
                                placeholder="Masukkan Nama Bundling"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-1"
                                {...register('namaBundling', { required: true })}
                                value={props.namaBundling}
                                onChange={(Event) => props.setNamaBundling(Event.target.value)}
                            />
                        </div>
                        <div style={{ marginTop: "3%" }} className="u-form-group u-form-group-3">
                            <label htmlFor="text-2398" className="u-label">Harga Bundling</label>
                            <br />
                            <p style={{ color: "red", fontSize: "12px", float: "left", marginLeft: "0%", marginTop: "0%" }}>
                                {errors.hargaBundling?.type === 'required' && "(Harga Bundling Kosong)"}
                            </p>
                            <input
                                type="text"
                                placeholder="Masukkan Harga Bundling"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-3"
                                {...register('hargaBundling', { required: true })}
                                value={props.hargaBundling}
                                onChange={(Event) => props.setHargaBundling(Event.target.value)}
                            />
                        </div>
                        <div style={{ marginTop: "3%" }} className="u-form-group u-form-textarea u-form-group-9">
                            <label htmlFor="textarea-8259" className="u-label">Deskripsi Bundling</label>
                            <br />
                            <p style={{ color: "red", fontSize: "12px", float: "left", marginLeft: "0%", marginTop: "0%" }}>
                                {errors.deskripsiBundling?.type === 'required' && "(Deskripsi Bundling Kosong)"}
                            </p>
                            <textarea
                                rows="4"
                                cols="50"
                                className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-9"
                                placeholder="Tulis Deskripsi Produk"
                                {...register('deskripsiBundling', { required: true })}
                                value={props.DeskripsiBundling}
                                onChange={(Event) => props.setDeskripsiBundling(Event.target.value)}
                            />
                        </div>
                        <div className="u-clearfix u-form-spacing-10 u-form-horizontal u-inner-form " style={{ marginTop: "2%", marginLeft: "0%", marginRight: "-1%" }}>
                            <div  className="u-form-group u-form-select u-form-group-8" style={{ width: "100%", marginTop: "3%"  }}>
                                <div className=" u-white " style={{ marginRight: "1%", width: "50%" }}>
                                    <label htmlFor="text-c8ee" className="u-label"><b>Gambar Bundling</b></label>
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
                                        className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-7"
                                        {...register('keteranganGambar1', { required: true })}
                                        value={props.keteranganGambar1}
                                        onChange={(Event) => props.setKeteranganGambar1(Event.target.value)}
                                        style={{ textAlign: "center", marginLeft: "3%", width: "80%" }}
                                    />
                                    <p style={{ color: "red", fontSize: "12px", marginTop: "10%", marginLeft: "3%", marginBottom: "0%" }}>
                                        {errors.gambar1?.type === 'required' && "(Pilih Gambar Bundling)"}
                                    </p>
                                    <input
                                        type="file"
                                        {...register('gambar1', { required: false })}
                                        onChange={props.handleFileInputChange}
                                        className="  u-input-rectangle custom-file-input"
                                    />
                                    <img src={props.gambar1Bundling} className="gambar-gambar" />
                                    <i className="fas fa-angle-double-right double-panah" ></i>
                                    <img src={props.gmbrstring1} className="gambar-gambar2" />
                                </div>
                                <div className=" u-white " style={{ marginLeft: "1%", width: "50%" }}>
                                    <label htmlFor="text-c8ee" className="u-label"><b>Gambar Bundling</b></label>
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
                                        className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-white u-input-7"
                                        {...register('keteranganGambar2', { required: true })}
                                        value={props.keteranganGambar2}
                                        onChange={(Event) => props.setKeteranganGambar2(Event.target.value)}
                                        style={{ textAlign: "center", marginLeft: "3%", width: "80%" }}
                                    />
                                    <p style={{ color: "red", fontSize: "12px", marginTop: "10%", marginLeft: "3%", marginBottom: "0%" }}>
                                        {errors.gambar2?.type === 'required' && "(Pilih Gambar Bundling)"}
                                    </p>
                                    <input
                                        type="file"
                                        {...register('gambar2', { required: false })}
                                        onChange={props.handleFileInputChange2}
                                        className=" u-input-rectangle custom-file-input"
                                    />
                                    <img src={props.gambar2Bundling} className="gambar-gambar" />
                                    <i className="fas fa-angle-double-right double-panah" ></i>
                                    <img src={props.gmbrstring2} className="gambar-gambar2" />
                                </div>
                            </div>
                        </div>
                        <div className="u-align-left u-form-group u-form-submit">
                            <button
                                className="button-simpan button2"
                                onClick={handleSubmit(props.onClick)}
                            >
                                <span>Edit</span>

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

const EditBundling = (props) => {
    // const [dataBundling, setDataBundling] = useState(props.daftarBundling)
    const [namaBundling, setNamaBundling] = useState(props.namaBundling)
    const [gambar1Bundling, setGambar1Bundling] = useState(props.gambar1Bundling)
    const [gambar2Bundling, setGambar2Bundling] = useState(props.gambar2Bundling)
    const [keteranganGambar1, setKeteranganGambar1] = useState(props.keteranganGambar1)
    const [keteranganGambar2, setKeteranganGambar2] = useState(props.keteranganGambar2)
    const [hargaBundling, setHargaBundling] = useState(props.hargaBundling)
    const [deskripsiBundling, setDeskripsiBundling] = useState(props.DeskripsiBundling)
    const [base64URL1, setBase641] = useState([])
    const [gmbrstring1, setGmbrString1] = useState(props.gambar1Bundling)
    const [base64URL2, setBase642] = useState([])
    const [gmbrstring2, setGmbrString2] = useState(props.gambar2Bundling)
    // const file = null

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
                <link rel="stylesheet" href="/css/Edit-Bundling-1.css" media="screen" />
                <Form

                    namaBundling={namaBundling} setNamaBundling={setNamaBundling}
                    gambar1Bundling={gambar1Bundling} setGambar1Bundling={setGambar1Bundling}
                    gambar2Bundling={gambar2Bundling} setGambar2Bundling={setGambar2Bundling}
                    keteranganGambar1={keteranganGambar1} setKeteranganGambar1={setKeteranganGambar1}
                    keteranganGambar2={keteranganGambar2} setKeteranganGambar2={setKeteranganGambar2}
                    hargaBundling={hargaBundling} setHargaBundling={setHargaBundling}
                    DeskripsiBundling={deskripsiBundling} setDeskripsiBundling={setDeskripsiBundling}
                    daftarKategori={props.daftarKategori}
                    gmbrstring1={gmbrstring1}
                    gmbrstring2={gmbrstring2}
                    handleFileInputChange={handleFileInputChange}
                    handleFileInputChange2={handleFileInputChange2}
                    onClick={async (data) => {
                        const bundling = {
                            namaBundling: data.namaBundling,
                            gambar1Bundling: gmbrstring1,
                            keteranganGambar1: data.keteranganGambar1,
                            gambar2Bundling: gmbrstring2,
                            keteranganGambar2: data.keteranganGambar2,
                            hargaBundling: data.hargaBundling,
                            DeskripsiBundling: data.deskripsiBundling,
                            idBundling: props.idBundling
                        };
                        try {
                            const respon = await fetch('/api/Bundling/Update', {
                                method: 'POST',
                                body: JSON.stringify(bundling),
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

export default EditBundling