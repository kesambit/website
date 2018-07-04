import React, { Component } from 'react';

const headerStyle = {
    backgroundColor: '#fff',
    height: "4.1em"
};

const logoStyle = {
    height: "2em"
}

const aStyle = {
    marginRight: '4px'
};

const imgStyle = {
    height: "1.6em",
    padding: "0.23em",
};

export const Headers = () => {
    return(
        <header id="header" style={headerStyle}
                data-uk-sticky="show-on-up: true; animation: uk-animation-fade; media: @l">
            <div className="uk-container">
                <nav id="navbar" data-uk-navbar="mode: click;">
                    <div className="uk-navbar-left nav-overlay uk-visible@m">
                        <ul className="uk-navbar-nav">
                            <li>
                                <a href="#" title="Subscribe">Subscribe</a>
                            </li>
                            <li>
                                <a href="#" title="Login">Login</a>
                            </li>
                        </ul>
                    </div>
                    <div className="uk-navbar-center nav-overlay">
                        <a className="uk-navbar-item uk-logo" href="/" title="Logo" ><img
                            src="/images/misc/logo-horisontal.png" alt="Logo" style={logoStyle}/></a>
                    </div>
                    <div className="uk-navbar-right nav-overlay">
                        <a className="uk-navbar-toggle uk-visible@m" data-uk-icon="search" data-uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"></a>
                        <div className="uk-navbar-item">
                            <a className="uk-visible@s" style={aStyle} href="https://t.me/kesambitgroup" target="_blank"><img src="/images/misc/telegram.png" style={imgStyle} alt="telegram" /></a>
                            <a className="uk-visible@s" style={aStyle} href="https://twitter.com/kesambitgroup" target="_blank" data-uk-icon="twitter"></a>
                            <a className="uk-visible@s" style={aStyle} href="https://instagram.com/kesambitgroup" target="_blank" data-uk-icon="instagram"></a>
                            <a className="uk-navbar-toggle uk-hidden@m" data-uk-toggle data-uk-navbar-toggle-icon
                               href="#offcanvas-nav"></a>
                        </div>

                    </div>
                    <div className="nav-overlay uk-navbar-left uk-flex-1" hidden>
                        <div className="uk-navbar-item uk-width-expand">
                            <form className="uk-search uk-search-navbar uk-width-1-1">
                                <input className="uk-search-input" type="search" placeholder="Search..." />
                            </form>
                        </div>
                        <a className="uk-navbar-toggle" data-uk-close
                           data-uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"></a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Headers;
