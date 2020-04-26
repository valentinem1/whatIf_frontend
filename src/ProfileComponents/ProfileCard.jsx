import React from 'react';
import { connect } from 'react-redux'
import { Header, Image } from 'semantic-ui-react'

const ProfileCard = (props) => {

    return (
        // display the profile header
        <Header as='h2' className="profile-header">
            <Image className="profile-picture" circular src={props.user.picture} /> {props.user.username}
        </Header>
        
    );
};

// Any time the store is updated, mapStateToProps will be called. The results of mapStateToProps will be merged into the wrapped component’s props.
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

// connect, connects the component with redux to provide the piece of data needed from the store. The first argument of connect must be the function that merge the state to the component's props like mapStateToProps, since we are not dispatching any actions there is no second argument needed.
export default connect(mapStateToProps)(ProfileCard);