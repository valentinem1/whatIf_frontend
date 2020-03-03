import React from 'react';
import ItemCard from './ItemCard'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { Card } from 'semantic-ui-react'

const ItemContainer = (props) => {

    return(

        <Card.Group itemsPerRow={6}>
            {!props.items ? null : props.items.map(item => <Link key={item.id} to={`/${item.id}`}><ItemCard key={item.id} item={item} /></Link>)}
        </Card.Group>

    );

};

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(ItemContainer);