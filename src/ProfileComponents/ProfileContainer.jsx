import React from 'react';
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import ProfileCard from './ProfileCard'
import OrderContainer from './OrderContainer'
import { deleteUser } from '../Actions/userActions'

const ProfileContainer = (props) => {

    // called when clicking on delete button. Will fetch to the back end with the deleted user. 
    const handleDelete = () => {
        // dynanmic routing with the user id.
        fetch(`https://watif-app-api.herokuapp.com/users/${props.user.id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(deletedUser => {
            // deleted user get sent back.
            // the localStorage gets cleared off which clears the token. It will then sign out the user automatically.
            localStorage.clear()
            // using the history props to push the user back to home page.
            props.history.push("/")
            // send the deleted user to the state by calling the deleteUser action which will trigger the store to call the reducer to change the state.
            props.deleteUser(deleteUser)
        })
    }

    return (
        <div>
            <ProfileCard />
            <Button className="delete-profile-btn" onClick={handleDelete}>Delete Profile</Button>
            <hr className="profile-order-separation"/>
            <OrderContainer pathname={props.routerProps.match.path}/>
        </div>
    );
}

// Any time the store is updated, mapStateToProps will be called. The results of mapStateToProps will be merged into the wrapped component’s props.
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

// connect, connects the component with redux to provide the piece of data needed from the store. The first argument of connect must be the function that merge the state to the component's props like mapStateToProps, second argument like { deleteUser } an ES6 destructuring feature must be the function(s) that dispatches the actions to the store.
export default connect(mapStateToProps, { deleteUser })(ProfileContainer);