import React from 'react';
import ItemCard from './ItemCard'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { Card } from 'semantic-ui-react'
import { searchItems } from '../Actions/itemsActions'

const ItemContainer = (props) => {
    // filter the item depending on the search bar input
    const filterSearch = () => {
        // filter the items array first and then check if the item title includes the search input from the search form.
        let newArr = props.items.filter(item => {
            // make it case sensitive by lower casing the search input
            let newSearchValue = props.searchItem.toLowerCase()
            // same here making it case sensitive.
            // checking it the item title includes the search input
            return item.title.toLowerCase().includes(newSearchValue)
        })
        return newArr
    }

    // check depending on the filter input to display the item the matches the filter.
    const sortByPrice = () => {
        // if the filter value is equal to highPrice it will then sort the item from high to low.
        if(props.sortValue === "highPrice"){
            let sortHighItems = props.items.sort((item1, item2) => item2.price - item1.price)
            return sortHighItems
        // else if the filter value is equal to lowPrice it will then sort the item from low to high.
        }else if(props.sortValue === "lowPrice"){
            let sortLowItems = props.items.sort((item1, item2) => item1.price - item2.price)
            return sortLowItems
        // else is the filter value is equal to All it will randomly show the item.
        }else if(props.sortValue === "All"){
            return props.items.sort(() => { return 0.5 - Math.random() })
        }
    }

    // // gets triggered once clicking on an item card. 
    // const clearSearch = () => {
    //     // set the search value to an empty string to the state by calling the searchItems action which will trigger the store to call the reducer to change the state.
    //     // It allos to clear the state to an empty string so if the customer goes back to the home page it will show all the items and not only the one that has been searched.
    //     props.searchItems("")
    // }

    return(
        // displays a group of card using Semantic UI component.
        <Card.Group className="all-items-container">
            {/* by iterating over the filter or search values it allows to reduce the display of items card depending of the filter or search value as well as all the items if theses search/filter values are empty. */}
            {filterSearch(sortByPrice()).map(item => <ItemCard key={item.id}  />)}
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

// connect, connects the component with redux to provide the piece of data needed from the store. The first argument of connect must be the function that merge the state to the component's props like mapStateToProps, second argument like { setUser, loginError } an ES6 destructuring feature must be the function(s) that dispatches the actions to the store.
export default connect(mapStateToProps, { searchItems })(ItemContainer);