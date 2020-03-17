import React from 'react';

import ProfileCard from './ProfileCard'
import OrderContainer from './OrderContainer'

const ProfileContainer = (props) => {
        return (
            <div>
                <ProfileCard />
                <OrderContainer pathname={props.match.path}/>
            </div>
        );
}

export default ProfileContainer;