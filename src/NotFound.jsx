import React from 'react';
import { Link } from 'react-router-dom'
import { Header, Icon } from 'semantic-ui-react'

const NotFound = () => {
    return (
        <div className="not-found-container">
            <Header className="not-found-message">Sorry it seems like you got lost.</Header>
            <Link to="/"><Icon className="back-home-arrow" name="arrow left"/><span className="back-home-btn">Go back home</span></Link>
        </div>
    );
};

export default NotFound;