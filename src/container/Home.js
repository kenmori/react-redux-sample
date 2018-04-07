import React, { Component } from 'react';
import '../scss/base/reset.css';
import '../scss/pages/home/Home.css';
import MediaQuery from 'react-responsive';
import {connect} from 'react-redux';
export class Home extends Component {
    render(){
        return (
            <div>
            <MediaQuery maxDeviceWidth={460}>
            </MediaQuery>
            <section>
                <h1>starter react-redux</h1>
            </section>
            </div>
        )
    }
}

export default connect({
})(Home);
