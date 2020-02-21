import React from 'react';
import {useParams} from 'react-router-dom'

import { connect } from 'react-redux'

import { Image } from 'semantic-ui-react'

const InfoContainer = (props) => {
    const paramsId = useParams()

    const item = props.items.find((item) => {
        return item.id === parseInt(paramsId.id)
    })
    // console.log(props.items)
    console.log(item)
    return (

        <div>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-qUdyTvpIG6w35K4hWPUkTeSyMIoUcaXGsTXqmfBK8bXWQqJf" alt="default image"/>
        </div>

    );
};

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(InfoContainer);