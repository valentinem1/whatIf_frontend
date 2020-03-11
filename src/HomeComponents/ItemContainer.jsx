import React from 'react';
import ItemCard from './ItemCard'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { Card } from 'semantic-ui-react'

const ItemContainer = (props) => {

    const filterSearch = () => {
        let newArr = props.items.filter(item => {
            let newSearchValue = props.searchItem.toLowerCase()
            return item.title.toLowerCase().includes(newSearchValue)
        })
        return newArr
    }
    return(
        <Card.Group className="all-items-container">
            {filterSearch().map(item => <Link key={item.id} to={`/${item.id}`}><ItemCard key={item.id} item={item} /></Link>)}
        </Card.Group>
    );

};

const mapStateToProps = (state) => {
    return {
        items: state.items.allItems,
        searchItem: state.items.search
    }
}

export default connect(mapStateToProps)(ItemContainer);