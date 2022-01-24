import Link from 'next/link'
import prisma from '../../client.ts'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Script from "next/script";

export async function getServerSideProps(context) {
  const daftarKategori = await prisma.kategori.findMany();
  const daftarBundling = await prisma.bundling.findMany();
  const daftarProduk = await prisma.produk.findMany();
  const daftarSlider = await prisma.slider.findMany();

  return {
    props: {
      daftarKategori,
      daftarBundling,
      daftarProduk,
      daftarSlider
    }
  }
}

const FormKategoriProduk = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <>
      <div className="u-clearfix u-form-horizontal u-form-spacing-10 u-inner-form u-white" style={{ padding: "10px" }}>
        <div className="u-form-group u-form-name  ">
          <label htmlFor="text-c8ee" className="u-label custom-label">Masukkan Kategori
          </label>
          <p style={{ color: "red", fontSize: "12px" }}>
            {errors.jenisKtg?.type === 'required' && "(Jenis Kategori Kosong)"}
          </p>
        </div>
      </div>

      <div className="u-clearfix u-form-horizontal u-form-spacing-10 u-inner-form u-white" style={{ padding: "15px 10px 10px 10px" }}>
        <div className="u-form-group u-form-name space">
          <input
            {...register('jenisKtg', { required: true })}
            className="form-control u-border-1 u-border-grey-30 u-input u-input-rectangle"
            type="text"
            id="jenisKtg"
            placeholder="Masukkan Kategori"
            style={{ height: "45px", width: "250px", marginTop: "-6%" }}
          />
        </div>
      </div>

      <div className="u-clearfix u-form-horizontal u-form-spacing-10 u-inner-form u-white" style={{ padding: "10px" }}>
        <div className="u-form-group u-form-name u-white">
          <label htmlFor="text-c8ee" className="u-label">Pilih Gambar
          </label>
          <p style={{ color: "red", fontSize: "12px" }}>
            {errors.gambarKtg?.type === 'required' && "(Pilih Gambar)"}
          </p>
        </div>
      </div>
      <div className="u-clearfix u-form-horizontal u-form-spacing-10 u-inner-form u-white" style={{ padding: "10px" }}>
        <div className="u-form-group u-form-name u-white space">
          <input
            type="file"
            id="gambarKtg"
            {...register('gambarKtg', { required: true })}
            onChange={props.handleFileInputChange}
            className=" u-input u-input-rectangle custom-file-input margin-button"
            style={{ marginTop: "-6%" }}
          />
        </div>
      </div>
      <div className="u-clearfix u-form-horizontal u-form-spacing-10 u-inner-form u-white" style={{ padding: "10px" }}>
        <div className="u-form-group u-form-name u-white ">
          <img src={props.gmbrstring} className='gambar-kategori' />
        </div>
      </div>
      <div className="u-clearfix u-form-horizontal u-form-spacing-10 u-inner-form u-white" style={{ padding: "10px" }}>
        <div className="u-align-center u-form-group u-form-submit">
          <button
            className="u-btn u-btn-submit u-button-style"
            onClick={handleSubmit(props.onClick)}
            style={{ height: "45px", width: "100%", marginLeft: "0%" }}
          >
            Simpan
          </button>
        </div>
      </div>
    </>
  )
}


const AdminHome = (props) => {
  // State Admin 
  const [Nama, setNama] = useState("")
  const [Gambar1, setGambar1] = useState("")
  const [Gambar2, setGambar2] = useState("")
  const [Harga, setHarga] = useState("")
  const [hargaSale, setHargaSale] = useState("")
  const [Kategori, setKategori] = useState("")
  const [Status, setStatus] = useState("")
  const [Jenis, setJenis] = useState("")
  const [Ukuran, setUkuran] = useState("")
  const [periodeSlider, setPeriodeSlider] = useState("")
  const [Id, setId] = useState()
  const [gambarKtg, setGambarKtg] = useState()


  const [dataKategori, setDataKategori] = useState(props.daftarKategori)
  const { register, handleSubmit, formState: { errors } } = useForm();


  const [base64URL, setBase64] = useState([])
  const [gmbrstring, setGmbrString] = useState()

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
        setGambarKtg(filestring)
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="u-body">
        <Script className="u-script" type="text/javascript" src="/js/jquery.js"></Script>
        <Script className="u-script" type="text/javascript" src="/js/nicepage.js" ></Script>
        <link rel="stylesheet" href="/css/Admin.css" media="screen" />
        <header className="u-align-center u-clearfix u-header u-header" id="sec-dce1"><div className="u-clearfix u-sheet u-sheet-1">
          <a href="Beranda.html" data-page-id="488405423" className="u-align-center u-image u-logo u-image-1" data-image-width="500" data-image-height="500" title="Beranda">
            <img src="/images/kudhung-removebg-preview.png" className="u-logo-image u-logo-image-1" />
          </a>
        </div>
        </header>


        {/* Bagian Kategori  */}
        <section className="u-align-center u-clearfix u-section-1" id="sec-4015">
          <div className="u-clearfix u-sheet u-valign-top u-sheet-1">
            <div className="u-expanded-width u-tab-links-align-justify u-tabs u-tabs-1">
              <ul className="u-border-2 u-border-palette-1-base u-spacing-10 u-tab-list u-unstyled" role="tablist">
                <li className="u-tab-item" role="presentation">
                  <a className="active u-active-palette-1-base u-button-style u-grey-10 u-tab-link u-text-active-white u-text-black u-tab-link-1" id="link-tab-0da5" href="#tab-0da5" role="tab" aria-controls="tab-0da5" aria-selected="true">Kategori</a>
                </li>
                <li className="u-tab-item" role="presentation">
                  <a className="u-active-palette-1-base u-button-style u-grey-10 u-tab-link u-text-active-white u-text-black u-tab-link-3" id="link-tab-2917" href="#tab-2917" role="tab" aria-controls="tab-2917" aria-selected="false">Bundling</a>
                </li>
                <li className="u-tab-item" role="presentation">
                  <a className="u-active-palette-1-base u-button-style u-grey-10 u-tab-link u-text-active-white u-text-black u-tab-link-2" id="link-tab-14b7" href="#tab-14b7" role="tab" aria-controls="tab-14b7" aria-selected="false">Produk</a>
                </li>
                <li className="u-tab-item u-tab-item-4" role="presentation">
                  <a className="u-active-palette-1-base u-button-style u-grey-10 u-tab-link u-text-active-white u-text-black u-tab-link-4" id="tab-93fc" href="#link-tab-93fc" role="tab" aria-controls="link-tab-93fc" aria-selected="false">Slider</a>
                </li>
              </ul>
              <div className="u-tab-content">
                <div className="u-container-style u-grey-10 u-shape-rectangle u-tab-active u-tab-pane u-tab-pane-1" id="tab-0da5" role="tabpanel" aria-labelledby="link-tab-0da5">

                  {/* Bagian Kategori Produk */}
                  <div className="u-container-layout u-container-layout-1">
                    <h4 className="u-text u-text-default u-text-1-kategori">KATEGORI PRODUK</h4>
                    <div className="u-form form-kategori">
                      <FormKategoriProduk
                        gmbrstring={gmbrstring}
                        handleFileInputChange={handleFileInputChange}
                        onClick={async (data) => {
                          const kategoriProduk = { jenisKtg: data.jenisKtg, gambarKtg: gmbrstring };

                          try {
                            const respon = await fetch('/api/Kategori/Create', {
                              method: 'POST',
                              body: JSON.stringify(kategoriProduk),
                            });

                            if (!respon.ok) throw new Error(respon.statusText);
                            let status = await respon.json();
                            if (status !== null) {
                              // event.target.value;
                              setDataKategori([...dataKategori, kategoriProduk]);
                              location.reload(true)
                            }
                          } catch (error) {
                            console.log(error)
                          }
                        }}
                      />
                    </div>
                    <div className="u-table u-table-responsive u-table-1" style={{ width: "75%" }}>
                      <table className="u-table-entity">
                        <colgroup>
                          <col width="6.6%" />
                          <col width="20%" />
                          <col width="20%" />
                          <col width="20%" />
                        </colgroup>
                        <thead className="u-grey-15 u-table-header u-table-header-1">
                          <tr style={{ height: "30px" }}>
                            <th className="u-table-cell u-table-cell-1">No.</th>
                            <th className="u-align-center u-table-cell u-table-cell-1">Gambar</th>
                            <th className="u-align-center u-table-cell u-table-cell-2">Jenis Kategori</th>
                            <th className="u-align-center u-table-cell u-table-cell-3">Aksi</th>
                          </tr>
                        </thead>
                        <tbody className="u-table-body">
                          {props.daftarKategori.map((kategori, i = 0) => (
                            <tr key={kategori.idKtg}>
                              <td className="u-align-center u-border-3 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell u-table-cell-4">{i + 1}</td>
                              <td className="u-align-center u-border-3 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell u-table-cell-4">
                                <img src={kategori.gambarKtg} style={{ width: "150px", height: "150px", textAlign: "center" }} alt="" />
                              </td>
                              <td className="u-align-center u-border-3 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell u-table-cell-4">{kategori.jenisKtg}</td>
                              <td className="u-align-center u-border-3 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell u-table-cell-6">
                                <span className="u-icon u-icon-1">
                                  <span className="u-align-center-sm u-align-center-xs u-icon u-icon-circle ">
                                    <span className="fontawesome-pen">
                                      <i className="fas fa-pen" style={{ cursor: "pointer" }}
                                        onClick={() => {
                                          setGambar1(kategori.gambarKtg)
                                          setGambarKtg(kategori.gambarKtg)
                                          setJenis(kategori.jenisKtg)
                                          setId(kategori.idKtg)
                                          document.getElementById('overlay-kategori').style.display = 'block'
                                        }}
                                      >
                                      </i>
                                    </span>
                                    |
                                    <span className="fontawesome-trash"><i className="fas fa-trash-alt" style={{ cursor: "pointer" }}
                                      onClick={() => {
                                        setId(kategori.idKtg)
                                        setNama(kategori.jenisKtg)
                                        document.getElementById('overlay-kategori-delete').style.display = 'block'
                                      }}
                                    ></i></span>
                                  </span>
                                  {/* SVG */}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
                {/* Bagian Produk  */}
                <div className="u-container-style u-grey-10 u-shape-rectangle u-tab-pane u-tab-pane-2" id="tab-14b7" role="tabpanel" aria-labelledby="link-tab-14b7">
                  <div className="u-container-layout u-container-layout-2">
                    <h4 className="u-text u-text-default u-text-3" style={{ marginBottom: "3%" }}>PRODUK</h4>
                    <Link href="/kudhung-administrator/produk/tambah">
                      <a className="u-border-none u-btn u-btn-round u-button-style u-grey-80 u-hover-grey-60 u-radius-3 u-text-body-alt-color u-text-hover-white u-btn-3">Tambahkan&nbsp;<span className="u-icon u-icon-14">
                        <span className="u-align-center-sm u-align-center-xs u-icon u-icon-circle ">
                          <i className="fas fa-plus"></i>
                        </span>
                        {/* SVG */}
                      </span>
                      </a>
                    </Link>
                    <div className="u-expanded-width u-table u-table-responsive u-table-3">
                      <table className="u-table-entity">
                        <colgroup>
                          <col width="2.46%" />
                          <col width="27.86%" />
                          <col width="24.52%" />
                          <col width="19.77%" />
                          <col width="11.95%" />
                          <col width="13.44%" />
                        </colgroup>
                        <thead className="u-grey-15 u-table-header u-table-header-2">
                          <tr style={{ height: "47px" }}>
                            <th className="u-table-cell u-table-cell-10">No.</th>
                            <th className="u-align-center u-table-cell u-table-cell-11">Gambar</th>
                            <th className="u-align-center u-table-cell u-table-cell-13">Nama Produk</th>
                            <th className="u-align-center u-table-cell u-table-cell-12">Harga Produk</th>
                            <th className="u-align-center u-table-cell u-table-cell-14">Kategori</th>
                            <th className="u-align-center u-table-cell u-table-cell-15">Aksi</th>
                          </tr>
                        </thead>
                        <tbody className="u-table-body">
                          {props.daftarProduk.map((produk, i = 0) => (
                            <tr style={{ height: "47px" }} key={produk.idProduk}>
                              <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell u-table-cell-16">{i + 1}</td>
                              <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">
                                <span className="u-file-icon u-icon u-icon-6">
                                  <img src={produk.gambar1Produk} style={{ width: "150px", height: "150px", marginRight: "2%" }} alt="" />
                                  <img src={produk.gambar2Produk} style={{ width: "150px", height: "150px", marginLeft: "2%" }} alt="" />
                                </span>
                                <br />
                                <div style={{ textAlign: "center" }}><label>Status Produk : <b> {produk.statusProduk} </b></label></div >
                              </td>
                              <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">{produk.namaProduk}</td>
                              <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">{produk.hargaProduk}</td>
                              <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">{produk.kategoriProduk}</td>
                              <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">
                                <span className="u-icon">
                                  <span className="u-align-center-sm u-align-center-xs u-icon u-icon-circle ">
                                    <Link href="/kudhung-administrator/produk/edit/[idProduk]" as={`/kudhung-administrator/produk/edit/${produk.idProduk}`}>
                                      <span className="fontawesome-pen"><i className="fas fa-pen" style={{ cursor: "pointer" }}></i></span>
                                    </Link>
                                    |
                                    <span className="fontawesome-trash"><i className="fas fa-trash-alt" style={{ cursor: "pointer" }}
                                      onClick={() => {
                                        setNama(produk.namaProduk)
                                        setGambar1(produk.gambar1Produk)
                                        setGambar2(produk.gambar2Produk)
                                        setId(produk.idProduk)
                                        setKategori(produk.kategoriProduk)
                                        setStatus(produk.statusProduk)
                                        setHarga(produk.hargaProduk)
                                        setHargaSale(produk.hargaSale)
                                        setJenis(produk.jenisKain)
                                        setUkuran(produk.ukuranProduk)
                                        document.getElementById('overlay-produk').style.display = 'block'
                                      }}
                                    ></i></span>
                                    |
                                    <Link href="/kudhung-administrator/produk/[informasiProduk]" as={`/kudhung-administrator/produk/${produk.namaProduk}`}>
                                      <span className="fontawesome-info"><i className="fas fa-info-circle" style={{ cursor: "pointer" }}></i></span>
                                    </Link>
                                  </span>
                                  {/* SVG */}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>


                {/* Bagian Bundling  */}
                <div className="u-container-style u-grey-10 u-shape-rectangle u-tab-pane u-tab-pane-3" id="tab-2917" role="tabpanel" aria-labelledby="link-tab-2917">
                  <div className="u-container-layout u-container-layout-3">
                    <h4 className="u-text u-text-default u-text-3" style={{ marginBottom: "3%" }}>BUNDLING</h4>
                    <Link href="/kudhung-administrator/bundling/tambah">
                      <a className="u-border-none u-btn u-btn-round u-button-style u-grey-80 u-hover-grey-60 u-radius-3 u-text-body-alt-color u-text-hover-white u-btn-3">Tambahkan&nbsp;<span className="u-icon u-icon-14">
                        <span className="u-align-center-sm u-align-center-xs u-icon u-icon-circle ">
                          <i className="fas fa-plus"></i>
                        </span>
                        {/* SVG */}
                      </span>
                      </a>
                    </Link>
                    <div className="u-expanded-width u-table u-table-responsive u-table-3">
                      <table className="u-table-entity">
                        <colgroup>
                          <col width="2.82%" />
                          <col width="28.48%" />
                          <col width="31.92%" />
                          <col width="23.28%" />
                          <col width="13.49%" />
                        </colgroup>
                        <thead className="u-grey-15 u-table-header u-table-header-3">
                          <tr style={{ height: "46px" }}>
                            <th className="u-align-center u-table-cell u-table-cell-28">No.</th>
                            <th className="u-align-center u-table-cell u-table-cell-29">Gambar</th>
                            <th className="u-align-center u-table-cell u-table-cell-30">Deskripsi</th>
                            <th className="u-align-center u-table-cell u-table-cell-31">Harga</th>
                            <th className="u-align-center u-table-cell u-table-cell-32">Aksi</th>
                          </tr>
                        </thead>
                        <tbody className="u-table-body">
                          {props.daftarBundling.map((bundling, i = 0) => (
                            <tr style={{ height: "49px" }} key={bundling.idBundling}>
                              <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">{i + 1}</td>
                              <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">
                                <span className="u-file-icon u-icon u-icon-15 img-fluid">
                                  <img src={bundling.gambar1Bundling} style={{ width: "150px", height: "150px", marginRight: "2%" }} alt="" />
                                  <img src={bundling.gambar2Bundling} style={{ width: "150px", height: "150px", marginLeft: "2%" }} alt="" />
                                </span>
                                <br />
                                <div style={{ textAlign: "justify" }}><label>Nama Bundling : <b>{bundling.namaBundling}</b></label></div >
                              </td>
                              <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell" style={{ textAlign: "justify" }}>{bundling.DeskripsiBundling}</td>
                              <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">{bundling.hargaBundling}</td>
                              <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">
                                <span className="u-icon">
                                  <span className="u-align-center-sm u-align-center-xs u-icon u-icon-circle ">
                                    <Link href="/kudhung-administrator/bundling/edit/[idBundling]" as={`/kudhung-administrator/bundling/edit/${bundling.idBundling}`}>
                                      <span className="fontawesome-pen"><i className="fas fa-pen" style={{ cursor: "pointer" }}></i></span>
                                    </Link>
                                    |
                                    <span className="fontawesome-trash"><i className="fas fa-trash-alt" style={{ cursor: "pointer" }}
                                      onClick={() => {
                                        setNama(bundling.namaBundling)
                                        setGambar1(bundling.gambar1Bundling)
                                        setGambar2(bundling.gambar2Bundling)
                                        setId(bundling.idBundling)
                                        setHarga(bundling.hargaBundling)
                                        document.getElementById('overlay').style.display = 'block'
                                      }}
                                    ></i></span>
                                  </span>
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>


                {/* Bagian Slider */}
                <div className="u-container-style u-grey-10 u-shape-rectangle u-tab-pane u-tab-pane-4" id="link-tab-93fc" role="tabpanel" aria-labelledby="tab-93fc">
                  <div className="u-container-layout u-valign-top u-container-layout-4">
                    <h4 className="u-text u-text-default u-text-4" style={{ marginBottom: "3%" }}>Slider</h4>
                    <Link href="/kudhung-administrator/slider/tambah">
                      <a className="u-border-none u-btn u-btn-round u-button-style u-grey-80 u-hover-grey-60 u-radius-3 u-text-body-alt-color u-text-hover-white u-btn-4">Tambahkan&nbsp;<span className="u-icon u-icon-23" style={{ marginBottom: "15%" }}>
                        <span className="u-align-center-sm u-align-center-xs u-icon u-icon-circle ">
                          <i className="fas fa-plus"></i>
                        </span>
                      </span>
                      </a>
                    </Link>
                    <div className="u-expanded-width u-table u-table-responsive u-table-4">
                      <table className="u-table-entity">
                        <colgroup>
                          <col width="1.8%" />
                          <col width="26.7%" />
                          <col width="14.3%" />
                          <col width="14.3%" />
                          <col width="14.3%" />
                        </colgroup>
                        <thead className="u-grey-15 u-table-header u-table-header-4">
                          <tr style={{ height: "47px" }}>
                            <th className="u-align-center u-table-cell u-table-cell-43">No.</th>
                            <th className="u-align-center u-table-cell u-table-cell-44">Gambar</th>
                            <th className="u-align-center u-table-cell u-table-cell-45">Status</th>
                            <th className="u-align-center u-table-cell u-table-cell-45">Kategori</th>
                            <th className="u-align-center u-table-cell u-table-cell-49">Aksi</th>
                          </tr>
                        </thead>
                        <tbody className="u-table-body">
                          {props.daftarSlider.map((slider, i = 0) => (
                            <tr style={{ height: "28px" }} key={slider.idSlider}>
                              <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">{i + 1}</td>
                              <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell img-fluid">
                                <div className="u-file-icon u-icon u-icon-24 ">
                                  <img src={slider.gambarSlider} alt="" style={{ width: "400px" }} />
                                </div>
                                <br />
                                <label className="u-align-center">{slider.periodeSlider}</label >
                                <br />
                                <label className="u-align-center">{slider.keteranganSlider}</label >
                              </td>
                              <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">{slider.statusSlider}</td>
                              {/* <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">{slider.periodeSlider}</td> */}
                              <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell">{slider.kategoriSlider}</td>
                              <td className="u-align-center u-border-2 u-border-grey-dark-1 u-border-no-left u-border-no-right u-table-cell"><span className="u-icon">
                                <span className="u-align-center-sm u-align-center-xs u-icon u-icon-circle ">
                                  <Link href="/kudhung-administrator/slider/edit/[idSlider]" as={`/kudhung-administrator/slider/edit/${slider.idSlider}`}>
                                    <span className="fontawesome-pen"><i className="fas fa-pen" style={{ cursor: "pointer" }}></i></span>
                                  </Link>
                                  |
                                  <span className="fontawesome-trash"><i className="fas fa-trash-alt" style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      setNama(slider.keteranganSlider)
                                      setGambar1(slider.gambarSlider)
                                      setPeriodeSlider(slider.periodeSlider)
                                      setId(slider.idSlider)
                                      document.getElementById('overlay-slider').style.display = 'block'
                                    }}
                                  ></i></span>
                                </span>
                                {/* SVG */}
                              </span>
                              </td>
                            </tr>
                          ))}
                          {/* <ListSliderAdmin /> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Delete Bundling  */}
            <link rel="stylesheet" href="/css/Modal.css" media="screen" />
            <div className="modal" id="overlay">
              <div className="body" id="body">
                <div className="grid-container">
                  <div className="item1">
                    <div className="header" id="header">
                      <p className="judul-bundling">{Nama}  ({Harga})</p>
                    </div>
                    <div>
                      <img src={Gambar1} style={{ width: "150px", height: "150px", margin: "2%" }}></img>
                      <img src={Gambar2} style={{ width: "150px", height: "150px", margin: "2%" }}></img>
                    </div>
                    <button
                      type="button"
                      className="cancelbtn button__config"
                      onClick={() => (document.getElementById('overlay').style.display = 'none')}
                    >
                      Batal
                    </button>
                    <button
                      type="button"
                      className="deletebtn button__config"
                      onClick={async () => {
                        const bundling = {
                          idBundling: Id
                        }
                        try {
                          const hapus = await fetch("/api/Bundling/Delete", {
                            method: "POST",
                            body: JSON.stringify(bundling),
                          });
                          location.reload();

                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Delete Produk  */}
            <div className="modal" id="overlay-produk">
              <div className="body" id="body">
                <div className="grid-container">
                  <div className='item1'>
                    <div className="header" id="header">
                      <p>{Nama}</p>
                    </div>
                    <img src={Gambar1} style={{ width: "150px", height: "150px", margin: "2%" }}></img>
                    <img src={Gambar2} style={{ width: "150px", height: "150px", margin: "2%" }}></img>
                  </div>
                  <div className="item22">
                    <div className="title-modal22"><span>Kategori</span></div>
                    <div className="content-modal22"><span>{Kategori}</span></div>
                  </div>
                  <div className="item322">
                    <div className="title-modal22"><span>Status Produk</span></div>
                    <div className="content-modal22"><span>{Status}</span></div>
                  </div>
                  <div className="item422">
                    <div className="title-modal22"><span>Harga Produk</span></div>
                    <div className="content-modal22"><span>{Harga}</span></div>
                  </div>
                  <div className="item522">
                    <div className="title-modal22"><span>Harga Sale</span></div>
                    <div className="content-modal22"><span>{hargaSale}</span></div>
                  </div>
                  <div className="item622">
                    <div className="title-modal22"><span>Jenis Kain</span></div>
                    <div className="content-modal22"><span>{Jenis}</span></div>
                  </div>
                  <div className="item722">
                    <div className="title-modal22"><span>Ukuran</span></div>
                    <div className="content-modal22"><span>{Ukuran}</span></div>
                  </div>
                  <div className="item1"  >
                    <button
                      type="button"
                      className="cancelbtn button__config"
                      onClick={() => (document.getElementById('overlay-produk').style.display = 'none')}
                    >
                      Batal
                    </button>
                    <button
                      type="button"
                      className="deletebtn button__config"
                      onClick={async () => {
                        const produk = {
                          idProduk: Id
                        }
                        try {
                          const hapus = await fetch("/api/Produk/Delete", {
                            method: "POST",
                            body: JSON.stringify(produk),
                          });
                          location.reload();

                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>


            {/* Modal Delete Slider  */}
            <div className="modal" id="overlay-slider">
              <div className="header" id="header">
                <p>{Nama}</p>
              </div>
              <div className="body" id="body">
                <div>
                  <img src={Gambar1} style={{ width: "15%", height: "15%", margin: "2%" }}></img>
                </div>
                <div className="grid-container">
                  <div className="item1"  >
                    <div className="title-modal"><span>Periode Slider : {periodeSlider} </span></div>
                    <button
                      type="button"
                      className="cancelbtn button__config"
                      onClick={() => (document.getElementById('overlay-slider').style.display = 'none')}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="deletebtn button__config"
                      onClick={async () => {
                        const slider = {
                          idSlider: Id
                        }
                        try {
                          const hapus = await fetch("/api/Slider/Delete", {
                            method: "POST",
                            body: JSON.stringify(slider),
                          });
                          location.reload();

                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Update Kategori Produk */}
            <div className="modal" id="overlay-kategori">
              <div className="body" id="body">
                <div className="u-container-style u-grey-10 u-shape-rectangle u-tab-active" style={{ width: "50%", marginLeft: "25%", marginTop: "0%" }}>
                  <div className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form ">
                    <div className="u-form-group u-form-select u-form-group-8">
                      {/* Bagian Kategori Produk */}
                      <div className="u-container-layout u-container-layout-1">
                        <h4 className="u-text u-text-default u-text-1 custom-label">EDIT KATEGORI PRODUK</h4>
                        <div className="u-form" style={{ marginTop: "10%" }}>
                          <div className="u-clearfix u-form-horizontal u-form-spacing-10 u-inner-form u-white" style={{ padding: "10px" }}>
                            <div className="u-form-group u-form-name u-white">
                              <label htmlFor="text-c8ee" className="u-label">Masukkan Kategori
                              </label>
                              <p style={{ color: "red", fontSize: "12px" }}>
                                {errors.jenisKtg?.type === 'required' && "(Jenis Kategori Kosong)"}
                              </p>
                            </div>
                          </div>

                          <div className="u-clearfix u-form-horizontal u-form-spacing-10 u-inner-form u-white" style={{ padding: "10px" }}>
                            <div className="u-form-group u-form-name  space">
                              <input
                                {...register('jenisKtg', { required: true })}
                                value={Jenis}
                                onChange={(Event) => setJenis(Event.target.value)}
                                className="form-control u-border-1 u-border-grey-30 u-input u-input-rectangle"
                                type="text"
                                id="jenisKtg"
                                placeholder="Masukkan Kategori"
                                style={{ height: "45px", width: "250px", marginTop: "-6%" }}
                              />
                            </div>
                          </div>

                          <div className="u-clearfix u-form-horizontal u-form-spacing-10 u-inner-form u-white" style={{ padding: "10px" }}>
                            <div className="u-form-group u-form-name u-white">
                              <label htmlFor="text-c8ee" className="u-label">Pilih Gambar
                              </label>
                              <p style={{ color: "red", fontSize: "12px" }}>
                                {errors.gambarKtg?.type === 'required' && "(Pilih Gambar)"}
                              </p>
                            </div>
                          </div>
                          <div className="u-clearfix u-form-horizontal u-form-spacing-10 u-inner-form u-white" style={{ padding: "10px" }}>
                            <div className="u-form-group u-form-name u-white space">
                              <input
                                type="file"
                                id="gambarKtg"
                                {...register('gambarKtg', { required: false })}
                                onChange={handleFileInputChange}
                                className=" u-input u-input-rectangle custom-file-input margin-button"
                                style={{ marginTop: "-6%" }}
                              />
                            </div>
                          </div>
                          <div className="u-clearfix u-form-horizontal u-form-spacing-10 u-inner-form u-white" style={{ padding: "10px" }}>
                            <div className="u-form-group u-form-name u-white">
                              <img src={Gambar1} style={{ width: "25%", height: "25%", marginLeft: "0%" }} />
                              <i className="fas fa-angle-double-right" style={{ marginTop: "0%", fontSize: "20px", position: "absolute", marginLeft: "32%" }}></i>
                              <img src={gambarKtg} style={{ width: "25%", height: "25%", marginLeft: "25%" }} />
                            </div>
                          </div>
                          <div className="u-clearfix u-form-horizontal u-form-spacing-10 u-inner-form u-white" style={{ padding: "10px" }}>
                            <div className="u-align-center u-form-group u-form-submit">
                              <button
                                className="u-btn u-btn-submit u-button-style"
                                style={{ height: "45px", width: "450px", marginRight: "2%", fontWeight: "bold" }}
                                onClick={async () => {
                                  const kategoriProduk = {
                                    jenisKtg: Jenis,
                                    idKtg: Id,
                                    gambarKtg: gambarKtg
                                  };
                                  try {
                                    const respon = await fetch('/api/Kategori/Update', {
                                      method: 'POST',
                                      body: JSON.stringify(kategoriProduk),
                                    });
                                    if (!respon.ok) throw new Error(respon.statusText);
                                    let status = await respon.json();
                                    if (status !== null) {
                                      location.reload();
                                    }
                                  } catch (error) {
                                    console.log(error);
                                  }
                                }}
                              >
                                Edit
                              </button>
                              <button
                                className="u-btn u-btn-submit u-button-style"
                                style={{ height: "45px", width: "450px", marginLeft: "2%", backgroundColor: "red", fontWeight: "bold" }}
                                onClick={() => (document.getElementById('overlay-kategori').style.display = 'none')}
                              >
                                Batal
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Delete Kategori Produk */}
            <div className="modal" id="overlay-kategori-delete">
              <div className="body" id="body">
                <div className="grid-container">
                  <div className="item1"  >
                    <p className='judul-ktg'>Hapus Kategori {Nama} ? </p>
                    <button
                      type="button"
                      className="cancelbtn button__config"
                      onClick={() => (document.getElementById('overlay-kategori-delete').style.display = 'none')}
                    >
                      Batal
                    </button>
                    <button
                      type="button"
                      className="deletebtn button__config"
                      onClick={async () => {
                        const kategori = {
                          idKtg: Id
                        }
                        try {
                          const hapus = await fetch("/api/Kategori/Delete", {
                            method: "POST",
                            body: JSON.stringify(kategori),
                          });
                          location.reload();

                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    >
                      Ya
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section >
      </div >

    </>
  )
}

export default AdminHome