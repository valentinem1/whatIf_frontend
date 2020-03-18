import React from 'react';
import { connect } from 'react-redux'
import { Header, Image } from 'semantic-ui-react'

const ProfileCard = (props) => {

    return (
        <Header as='h2' className="profile-header">
            <Image className="profile-picture" circular src={props.user.picture} /> {props.user.username}
        </Header>
        
    );
};

ProfileCard.defaultProps = {
    src: "https://profiles.utdallas.edu/img/default.png"    
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(ProfileCard);