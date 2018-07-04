import React from 'react';

const bannerStyle = {
    letterSpacing: "0.2em",
    fontSize: "0.725rem"
}

export const Banner = () => {
    return (
        <section className="uk-section uk-section-small">
            <div className="uk-container">
                <div className="uk-position-relative uk-visible-toggle uk-light" data-uk-slideshow="animation: push">

                    <ul className="uk-slideshow-items">
                        <li>
                            <div
                                className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                                <img src="/images/banner/pengenalan-laravel-untuk-pemula.jpg" alt="laravel" data-uk-cover="" />
                            </div>
                        </li>
                        <li>
                            <div
                                className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-top-right">
                                <img src="/images/banner/pengenalan-lumen-untuk-pemula.jpg" alt="" data-uk-cover="" />
                            </div>
                        </li>
                        <li>
                            <div
                                className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-bottom-left">
                                <img src="/images/banner/pengenalan-reactjs-untuk-pemula.jpg" alt="" data-uk-cover="">
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
