import React from 'react';
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import ProfileCard from './ProfileCard'
import OrderContainer from './OrderContainer'
import { deleteUser } from '../Actions/userActions'

const ProfileContainer = (props) => {

    const handleDelete = () => {
        fetch(`http://localhost:4000/users/${props.user.id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(deletedUser => {
            localStorage.clear()
            props.history.push("/")
            props.deleteUser(deleteUser)
        })
    }

        return (
            <div>
                <ProfileCard />
                <Button className="delete-profile-btn" onClick={handleDelete}>Delete Profile</Button>
                <hr className="profile-order-separation"/>
                <OrderContainer pathname={props.match.path}/>
            </div>
        );
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { deleteUser })(ProfileContainer);