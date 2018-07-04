import React from 'react';

const bannerStyle = {
    letterSpacing: "0.2em",
    fontSize: "0.725rem"
}

export const Banner = () => {
    return (
        <section className="uk-section uk-section-small">
            <div className="uk-container">
                <div className="uk-height-large uk-cover-container uk-border-rounded">
                    <img src="/images/banner/pengenalan-laravel-untuk-pemula.jpg" alt="Alt img" data-uk-cover=""  />
                        <div
                            className="uk-overlay uk-overlay-primary uk-position-cover uk-flex uk-flex-center uk-flex-middle uk-light uk-text-center">
                            <div data-uk-scrollspy="cls: uk-animation-slide-bottom-small">
                                <span style={bannerStyle}>SEMINAR</span>
                                <h1 className="uk-margin-top uk-margin-small-bottom uk-margin-remove-adjacent">Pengenalan Laravel untuk Pemula</h1>
                                <p>28-29 Juli 2018.</p>
                                <a href="#" className="uk-button uk-button-default uk-margin-top">DAFTAR GRATIS</a>
                            </div>
                        </div>

                </div>
            </div>
        </section>
    );
}

export default Banner;
