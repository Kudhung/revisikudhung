import Footer from "./Footer"
import Link from 'next/link'
import Script from "next/script";

const LayoutSlider = (props) => (

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
                {/* <!-- Search  --> */}
                {props.childrenSearch}
                {/* <!-- Slider  --> */}
                {/* <!-- Profile --> */}
                <span className="u-align-center-sm u-align-center-xs u-icon u-icon-circle u-icon-1" style={{ fontSize: "37px", cursor: "pointer" }}>
                </span>
                {/* <!--Shopping_Cart--> */}
                <a className="u-align-center-sm u-align-center-xs u-shopping-cart u-shopping-cart-1"  >
                    <span className="u-icon u-shopping-cart-icon">
                        <span className="u-align-center-sm u-align-center-xs u-icon u-icon-circle "
                            style={{ fontSize: "33px", marginTop: "2px" }}>
                        </span>
                    </span>
                </a>
                <div
                    className="u-carousel u-expanded-width u-gallery u-gallery-slider u-layout-carousel u-lightbox u-no-transition u-show-text-on-hover u-gallery-1"
                    data-interval="5000" data-u-ride="carousel" id="carousel-80dd" >
                    {/* <!-- Indicator Slide  --> */}
                    <ol className="u-absolute-hcenter u-carousel-indicators u-carousel-indicators-1">
                        <li data-u-target="#carousel-80dd" data-u-slide-to="0" className="u-active u-grey-70 u-shape-circle"
                            style={{ width: "10px", height: "10px" }}></li>
                        {props.childrenCircle}
                    </ol>
                    <div className="u-carousel-inner u-gallery-inner" role="listbox">
                        <div className="u-active u-carousel-item u-effect-fade u-gallery-item u-carousel-item-1">
                            <div className="u-back-slide" data-image-width="500" data-image-height="500">
                                <img className="u-back-image u-expanded" src="/images/Beranda-utama.jpeg" />
                            </div>
                        </div>
                        {props.childrenSlider}
                        <a className="u-absolute-vcenter u-carousel-control u-carousel-control-prev u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-carousel-control-1"
                            href="#carousel-80dd" role="button" data-u-slide="prev">
                            <span aria-hidden="true">
                                <i className="fas fa-chevron-left" style={{ fontSize: "25px", marginTop: "-2px", marginLeft: "-3px" }}></i>
                            </span>
                        </a>
                        <a className="u-absolute-vcenter u-carousel-control u-carousel-control-next u-grey-70 u-icon-circle u-opacity u-opacity-70 u-spacing-10 u-text-white u-carousel-control-2"
                            href="#carousel-80dd" role="button" data-u-slide="next">
                            <span aria-hidden="true">
                                <i className="fas fa-chevron-right" style={{ fontSize: "25px", marginTop: "-2px", marginRight: "-3px" }}></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <nav className="u-align-left u-menu u-menu-dropdown u-offcanvas u-menu-1" data-responsive-from="MD"
                data-position="Navbar">
                <div className="menu-collapse u-custom-font"
                    style={{ fontSize: "1rem", letterSpacing: "0px", fontFamily: "Lato", fontWeight: "900" }}>
                    <a className="u-button-style u-custom-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base">
                        <i className="fas fa-bars hamburger-respon" style={{ cursor: "pointer" }}> </i>
                    </a>
                </div>
                <div className="u-custom-menu u-nav-container" style={{ marginTop: "-100px" }}>
                    <ul className="u-custom-font u-nav u-unstyled u-nav-1 nav-respon">
                        <li className="u-nav-item"><a
                            className="u-button-style u-custom-color-1 u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base li-respon-2"
                            href="/" style={{ padding: "16px 99px" }}><i className="fas fa-home li-respon-2" style={{ marginRight: "5px" }}></i>Beranda</a>
                        </li>
                        <li className="u-nav-item"><a
                            className="u-button-style u-custom-color-1 u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base i-respon-2"
                            href="/Sale" style={{ padding: "16px 99px" }}><i className="fas fa-tags li-respon-2" style={{ marginRight: "5px" }}></i>Sale</a>
                        </li>
                        <li className="u-nav-item"><a
                            className="u-button-style u-custom-color-1 u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base "
                            href="/Bundling" style={{ padding: "16px 99px" }}><i className="fas fa-box-open li-respon-2" style={{ marginRight: "5px" }}></i>Bundling</a>
                        </li>
                        <li className="u-nav-item"><a
                            className="u-button-style u-custom-color-1 u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base li-respon-2"
                            href="/Tentang-Kami" style={{ padding: "16px 99px" }}><i className="fas fa-info-circle li-respon-2" style={{ marginRight: "5px" }}></i>Tentang Kami</a>
                        </li>
                    </ul>
                </div>

                {/* Header Sidebar */}
                <div className="u-custom-menu u-nav-container-collapse">
                    <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                        <div className="u-inner-container-layout u-sidenav-overflow">
                            <div className="u-menu-close"><i className="fas fa-times" style={{ fontSize: "35px", cursor: "pointer" }}></i></div>
                            <ul className=" u-nav u-popupmenu-items u-unstyled u-nav-2">
                                <li className="u-nav-item">
                                    <a className="u-button-style u-nav-link" href="/"
                                        style={{ padding: "16px 99px" }}><i className="fas fa-home" style={{ marginRight: "5px" }}></i>Beranda</a>
                                </li>
                                <li className="u-nav-item">
                                    <Link href="/Sale">
                                        <a className="u-button-style u-nav-link"
                                            style={{ padding: "16px 99px" }}><i className="fas fa-tags" style={{ marginRight: "5px" }}></i>Sale</a>
                                    </Link>
                                </li>
                                <li className="u-nav-item"><a className="u-button-style u-nav-link" href="/Bundling"
                                    style={{ padding: "16px 99px" }}><i className="fas fa-box-open" style={{ marginRight: "5px" }}></i>Bundling</a>
                                </li>
                                <li className="u-nav-item"><a className="u-button-style u-nav-link" href="/Tentang-Kami"
                                    style={{ padding: "16px 99px" }}><i className="fas fa-info-circle" style={{ marginRight: "5px" }}></i>Tentang Kami</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
                </div >
            </nav >
            {/* Navbar */}
        </header >
        {props.children}
        <Footer />
    </div>
)

export default LayoutSlider;