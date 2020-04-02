import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'

class Footer extends Component {

    actualYear = () => {
        let date = new Date();
        let year = date.getFullYear();
        return year
    }

    render() {
        return (
            <div className="footer-container">
                <div className="footer-logo-container">
                    <Header className="footer-title">Watif</Header>
                </div>
                <span className="footer-certified-logo">&copy; {this.actualYear()} Watif All rights reserved.</span>
                <p className="footer-website-rights">Watif is an e-marketplace, and does not charge any service fees to users of our site. Our mission is to provide you the best experience while shopping for unique items.</p>
            </div>
        );
    }
}

export default Footer;