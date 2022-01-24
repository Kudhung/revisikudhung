import Footer from "./Footer"
import Script from "next/script";

const LayoutDeskripsi = (props) => (
    <div className="u-body">
    <Script className="u-script" type="text/javascript" src="/js/jquery.js"></Script>
    <Script className="u-script" type="text/javascript" src="/js/nicepage.js" ></Script>
        < header className="u-align-center u-clearfix u-header u-header" id="sec-dce1" >
            <div className="u-clearfix u-sheet u-valign-middle-sm u-valign-middle-xs u-sheet-1">
                {/* <!-- Logo  --> */}
                <a href="/" data-page-id="488405423" className="u-align-center u-image u-logo u-image-1"
                    data-image-width="500" data-image-height="500" title="Beranda">
                    <img src="/images/kudhung-removebg-preview.png" className="u-logo-image u-logo-image-1" />
                </a>
                {/* <!-- Slider  --> */}
            </div>
        </header >
        {props.children}
        <Footer />
    </div>
)

export default LayoutDeskripsi;