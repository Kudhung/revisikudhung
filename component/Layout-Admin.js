import Link from 'next/link'
import Script from "next/script";

const LayoutAdmin = (props) => (
    <>
        <link rel="stylesheet" href="/css/Admin.css" media="screen" />
        <Script className="u-script" type="text/javascript" src="/js/jquery.js"></Script>
        <Script className="u-script" type="text/javascript" src="/js/nicepage.js" ></Script>
        <div className="u-body">
            < header className="u-align-center u-clearfix u-header u-header" id="sec-dce1" >
                <div className="u-clearfix u-sheet u-sheet-1">
                    <Link href="/kudhung-administrator">
                        <a data-page-id="488405423" className="u-align-center u-image u-logo u-image-1"
                            data-image-width="500" data-image-height="500" title="Beranda" style={{ marginTop: "3%" }}>
                            <img src="/images/kudhung-removebg-preview.png" className="u-logo-image u-logo-image-1" />
                        </a>
                    </Link>
                </div>
            </header >
            {/* Haeder  */}
            {props.children}
        </div>
    </>
)


export default LayoutAdmin