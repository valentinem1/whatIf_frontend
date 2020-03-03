import React from 'react';
import { connect } from 'react-redux'

import { Header, Image } from 'semantic-ui-react'
// import{ userProfile } from '../Actions/userActions'

const ProfileCard = (props) => {
    
    return (
        <Header as='h2'>
            <Image circular src={props.user.picture} /> {props.user.username}
        </Header>
        
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(ProfileCard);