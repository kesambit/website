import React from 'react';

export const Navigation = () => {
    return (
        <div className="uk-container">
            <nav className="nav-scroll">
                <ul className="uk-subnav uk-flex uk-flex-between uk-flex-nowrap">
                    <li className="uk-active"><a href="/"><span uk-icon="home"></span></a></li>
                    <li><a href="#">Seminar</a></li>
                    <li><a href="#">Bot Camp</a></li>
                    <li><a href="#">Trainer</a></li>
                    <li><a href="#">Partner</a></li>
                    <li><a href="#">CRM</a></li>
                    <li><a href="#">Sertifikasi</a></li>
                    <li><a href="#">Anggota</a></li>
                    <li><a href="#">Komunitas</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;
