import React from 'react';
import ItemCard from './ItemCard'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'

const ItemContainer = (props) => {
    // filter the item depending on the search bar input
    const filterSearch = () => {
        // filter the items array first and then check if the item title includes the search input from the search form.
        let newArr = props.items.filter(item => {
            // make it case sensitive by lower casing the search input
            let newSearchValue = props.searchItem.toLowerCase()
            // same here making it case sensitive.
            // checking if the item title includes the search input
            return item.title.toLowerCase().includes(newSearchValue)
        })
        return newArr
    }

    // check depending on the filter input to display the items that matches the filter.
    const sortByPrice = () => {
        // if the filter value is equal to highPrice it will then sort the items from high to low.
        if(props.sortValue === "highPrice"){
            let sortHighItems = props.items.sort((item1, item2) => item2.price - item1.price)
            return sortHighItems
        // else if the filter value is equal to lowPrice it will then sort the items from low to high.
        }else if(props.sortValue === "lowPrice"){
            let sortLowItems = props.items.sort((item1, item2) => item1.price - item2.price)
            return sortLowItems
        // else is the filter value is equal to All it will randomly show the items.
        }else if(props.sortValue === "All"){
            return props.items.sort(() => { return 0.5 - Math.random() })
        }
    }

    return(
        // displays a group of card using Semantic UI component.
        <Card.Group className="all-items-container">
            {/* by iterating over the filter or search values it allows to reduce the display of items card depending of the filter or search value as well as all the items if theses search/filter values are empty. */}
            {filterSearch(sortByPrice()).map(item => <ItemCard key={item.id} item={item} />)}
        </Card.Group>
    );

};

// Any time the store is updated, mapStateToProps will be called. The results of mapStateToProps will be merged into the wrapped component’s props.
const mapStateToProps = (state) => {
    return {
        items: state.items.allItems,
        searchItem: state.items.search,
        sortValue: state.items.sortValue
    }
}

// connect, connects the component with redux to provide the piece of data needed from the store. The first argument of connect must be the function that merge the state to the component's props like mapStateToProps. Not second argument needed in that situation since no dispatcher is called.
export default connect(mapStateToProps)(ItemContainer);