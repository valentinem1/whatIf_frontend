import React from 'react';
import ItemCard from './ItemCard'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { Card } from 'semantic-ui-react'

const ItemContainer = (props) => {

    // filter the item depending on the search bar input
    const filterSearch = () => {
        let newArr = props.items.filter(item => {
            let newSearchValue = props.searchItem.toLowerCase()
            return item.title.toLowerCase().includes(newSearchValue)
        })
        return newArr
    }

    const sortByPrice = () => {
        if(props.sortValue === "highPrice"){
            let sortHighItems = props.items.sort((item1, item2) => item2.price - item1.price)
            return sortHighItems
        }else if(props.sortValue === "lowPrice"){
            let sortLowItems = props.items.sort((item1, item2) => item1.price - item2.price)
            return sortLowItems
        }else if(props.sortValue === "All"){
            return props.items.sort(() => { return 0.5 - Math.random() })
        }
    }

    return(
        <Card.Group className="all-items-container">
            {filterSearch(sortByPrice()).map(item => <Link key={item.id} to={`/${item.id}`}><ItemCard key={item.id} item={item} /></Link>)}
        </Card.Group>
    );

};

const mapStateToProps = (state) => {
    return {
        items: state.items.allItems,
        searchItem: state.items.search,
        sortValue: state.items.sortValue
    }
}

export default connect(mapStateToProps)(ItemContainer);