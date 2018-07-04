import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Headers from './Header';
import Navigation from './Navigation';
import Banner from './Banner';
import Footer from './Footer';

class Main extends Component {
    render (){
        return (
            <div>
                <Headers />
                <Navigation />
                    <div id="content" className="uk-container">
                        <Banner />
                        Content
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Main;
