import React from 'react';
import { Menu, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { sortByPrice } from '../Actions/itemsActions'

const FilterItemsContainer = (props) => {


    const clickingHighPrice = (event) => {
        props.sortByPrice(props.items)
        // console.log(props.items)
    }

    const clickingLowPrice = (event) => {
        console.log(event)
    }

    return (

        <div className="filter-container">
            <Menu text vertical>
                <Menu.Item header>Sort By</Menu.Item>
                <Checkbox 
                    label='price: Highest to Lowest' 
                    onClick={clickingHighPrice}
                />
                <Checkbox 
                    label='price: Lowest to Highest' 
                    onClick={clickingLowPrice}
                />
            </Menu>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        items: state.items
    }
}

export default connect(mapStateToProps, { sortByPrice })(FilterItemsContainer);