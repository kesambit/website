import React from 'react';

const bannerStyle = {
    letterSpacing: "0.2em",
    fontSize: "0.725rem"
}

export const Banner = () => {
    return (
        <section className="uk-section uk-section-small">
            <div className="uk-container">
                <div className="uk-position-relative uk-visible-toggle uk-light" data-uk-slideshow="animation: push;autoplay:true">

                    <ul className="uk-slideshow-items" data-uk-height-viewport="offset-top: true; offset-bottom : 7 ">
                        <li>
                            <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-top-right">
                                <img src="/images/banner/pengenalan-laravel-untuk-pemula.jpg" alt="" data-uk-cover />
                            </div>
                            <div
                                className="uk-overlay uk-overlay-primary uk-position-cover uk-flex uk-flex-center uk-flex-middle uk-light uk-text-center">
                                <div data-uk-scrollspy="cls: uk-animation-slide-bottom-small">
                                    <span style={bannerStyle}>SEMINAR</span>
                                    <h1 className="uk-margin-top uk-margin-small-bottom uk-margin-remove-adjacent uk-text-danger">Pengenalan Laravel untuk Pemula</h1>
                                    <p>28-29 Juli 2018.</p>
                                    <a href="#" className="uk-button uk-button-default uk-margin-top">DAFTAR GRATIS</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-top-right">
                                <img src="/images/banner/pengenalan-lumen-untuk-pemula.jpg" alt="" data-uk-cover />
                            </div>
                            <div
                                className="uk-overlay uk-overlay-primary uk-position-cover uk-flex uk-flex-center uk-flex-middle uk-light uk-text-center">
                                <div data-uk-scrollspy="cls: uk-animation-slide-bottom-small">
                                    <span style={bannerStyle}>SEMINAR</span>
                                    <h1 className="uk-margin-top uk-margin-small-bottom uk-margin-remove-adjacent uk-text-success">Pengenalan Lumen untuk Pemula</h1>
                                    <p>14-15 Agustus 2018.</p>
                                    <a href="#" className="uk-button uk-button-default uk-margin-top">DAFTAR GRATIS</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-top-right">
                                <img src="/images/banner/pengenalan-reactjs-untuk-pemula.jpg" alt="" data-uk-cover />
                            </div>
                            <div
                                className="uk-overlay uk-overlay-primary uk-position-cover uk-flex uk-flex-center uk-flex-middle uk-light uk-text-center">
                                <div data-uk-scrollspy="cls: uk-animation-slide-bottom-small">
                                    <span style={bannerStyle}>SEMINAR</span>
                                    <h1 className="uk-margin-top uk-margin-small-bottom uk-margin-remove-adjacent uk-text-warning">Pengenalan React JS untuk Pemula</h1>
                                    <p>15-16 Agustus 2018.</p>
                                    <a href="#" className="uk-button uk-button-default uk-margin-top">DAFTAR GRATIS</a>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#"  data-uk-slidenav-previous="" data-uk-slideshow-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next="" uk-slideshow-item="next"></a>

                </div>
            </div>
        </section>
);
}

export default Banner;
