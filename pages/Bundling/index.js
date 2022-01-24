import LayoutSlider from "../../component/Main-Layout-Slider"
import Link from 'next/link'
import { useState, useCallback, useRef, useEffect } from "react";
import prisma from '../../client.ts'

export async function getServerSideProps(context) {
  const daftarKategori = await prisma.kategori.findMany();
  const daftarProduk = await prisma.produk.findMany();
  const daftarBundling = await prisma.bundling.findMany();
  const daftarSlider = await prisma.slider.findMany({
    where: { kategoriSlider: "Bundling", statusSlider: "On" },
  });
  return { props: { daftarProduk, daftarKategori, daftarBundling, daftarSlider } };
}

const ListBundling = (props) => (
  <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
    <img alt="" className="u-expanded-width u-image u-image-default u-product-control u-image-1"
      src={props.gambar1Bundling} />
    <div className="u-align-center u-custom-font u-font-lato u-product-control u-text u-text-2 u-product-title-link">
      {props.namaBundling}
    </div>
    <div className="u-product-control u-product-price u-product-price-1">
      <div className="u-price-wrapper u-spacing-10">
        <div className="u-price u-text-palette-2-base" style={{ fontSize: "1.25rem", fontWeight: "700", marginLeft: "0%" }}>
          {props.hargaBundling}
        </div>
      </div>
    </div>
    <Link href="/Bundling/Deskripsi/[namaBundling]" as={`/Bundling/Deskripsi/${props.namaBundling}`}>
      <a
        className="u-border-2 u-border-grey-25 u-btn u-btn-rectangle u-button-style u-none u-product-control u-text-body-color u-btn-1">
        Detail Bundling
      </a>
    </Link>
  </div>
)

const Bundling = ({ daftarBundling, daftarProduk, daftarKategori, daftarSlider }) => {
  const searchRef = useRef(null)
  const [active, setActive] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [allProducts, setAllProducts] = useState([]);
  const [allKategori, setAllKategori] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredKategori, setFilteredKategori] = useState([]);
  const [filters, setFilters] = useState({
    s: '',
    sort: '',
    page: 1
  });
  const [lastPage, setLastPage] = useState(0);
  const [lastPage2, setLastPage2] = useState(0);
  const perPage = allProducts.length;

  useEffect(() => {
    (
      async () => {
        setAllProducts(daftarProduk);
        setAllKategori(daftarKategori);
        setFilteredProducts(daftarProduk.slice(0, filters.page * perPage));
        setFilteredKategori(daftarKategori.slice(0, filters.page * perPage));
        setLastPage(Math.ceil(daftarProduk.length / perPage));
        setLastPage2(Math.ceil(daftarKategori.length / perPage));
      }
    )()
  }, []);

  useEffect(() => {
    let products = allProducts.filter(p => p.namaProduk.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0);
    if (filters.sort === 'asc' || filters.sort === 'desc') {
      products.sort((a, b) => {
        const diff = a.namaProduk - b.namaProduk;
        if (diff === 0) return 0;
        const sign = Math.abs(diff) / diff; //-1, 1
        return filters.sort === 'asc' ? sign : -sign;
      })
    }
    setLastPage(Math.ceil(products.length / perPage));
    setFilteredProducts(products.slice(0, filters.page * perPage));
  }, [filters]);

  useEffect(() => {
    let kategori = allKategori.filter(p => p.jenisKtg.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0);
    if (filters.sort === 'asc' || filters.sort === 'desc') {
      kategori.sort((a, b) => {
        const diff = a.nama - b.nama;
        if (diff === 0) return 0;
        const sign = Math.abs(diff) / diff; //-1, 1
        return filters.sort === 'asc' ? sign : -sign;
      })
    }
    setLastPage2(Math.ceil(kategori.length / perPage));
    setFilteredKategori(kategori.slice(0, filters.page * perPage));
  }, [filters]);

  const onFocus = useCallback((s) => {
    setFilters({
      ...filters,
      s,
      page: 1
    });
    if (s.length) {
      setResults([filteredProducts], [filteredKategori])
    } else {
      setResults([])
    }
    setActive(true)
    setQuery(s)
    window.addEventListener('click', onClick)
  }, [])

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
  }, [])

  let button;

  if (filters.page !== lastPage && filters.page !== lastPage2) {
    button = (
      <table id="myTable">
        <tbody className="header" style={{ height: "250px", display: "block", overflowX: "hidden", scrollBehavior: "auto" }}>
          <tr>
            <td>
              <a>Data Not Found</a>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }

  return (
    <>
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

        childrenSearch={
          <div>
            <div
              className="u-align-center-sm u-align-center-xs u-border-1 u-border-grey-30 u-search u-search-left u-white u-search-1">
              <div style={{ marginTop: "8px" }}>
                <span className="u-search-icon u-spacing-10">
                  <i className=" fas fa-search"></i>
                </span>
              </div>
              {/* <div ref={searchRef}> */}
              <input
                type="text"
                className="search"
                placeholder='Search posts'
                name={query}
                onKeyUp={e => onFocus(e.target.value)}
              />
              {/* </div> */}
              {active && results.length > 0 && (
                <>
                  <link rel="stylesheet" href="/css/cobasearch.css" media="screen" />
                  <table id="myTable">
                    <tbody className="header" style={{ height: "250px", display: "block", overflowX: "hidden", scrollBehavior: "auto" }}>
                      {filteredKategori.map((kategori) => (
                        <tr key={kategori.idKtg} className="hover-search">
                          <td >
                            <Link href="/Search/[idList]" as={`/Search/${kategori.jenisKtg}`}>
                              <a>{kategori.jenisKtg}</a>
                            </Link>
                          </td>
                        </tr>
                      )
                      )}
                      {filteredProducts.map((product) => (
                        <tr key={product.idProduk} className="hover-search">
                          <td>
                            <Link href="/Produk/Deskripsi/[namaProduk]" as={`/Produk/Deskripsi/${product.namaProduk}`}>
                              <a>{product.namaProduk}</a>
                            </Link>
                          </td>
                        </tr>
                      )
                      )}
                    </tbody>
                  </table>
                  {button}
                </>
              )}
            </div>
          </div>
        }
      >
        <link rel="stylesheet" href="/css/Bundling.css" media="screen" />
        <section className="u-align-center u-clearfix u-section-1" id="sec-533d">
          <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            <h3 className="u-text u-text-default u-text-1">Bundling</h3>
            <div className="u-expanded-width u-products u-products-1">
              <div className="u-repeater u-repeater-1">
                {daftarBundling.map((dt) => (
                  <div className="u-align-center u-container-style u-products-item u-repeater-item" key={dt.idBundling}>
                    <ListBundling
                      namaBundling={dt.namaBundling}
                      hargaBundling={dt.hargaBundling}
                      gambar1Bundling={dt.gambar1Bundling}
                    />
                  </div>
                )
                )}
              </div>
            </div>
          </div>
        </section>

      </LayoutSlider>
    </>
  )
}

export default Bundling