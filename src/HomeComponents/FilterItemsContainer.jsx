import React from 'react';
import { Menu, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { sortByPrice } from '../Actions/itemsActions'

const FilterItemsContainer = (props) => {

    // get triggered every time a filter is choosed.
    const handleAllPrice = (event) => {
        // set the filter picked to the state by calling the sortByPrice action which will trigger the store to call the reducer to change the state. We give it the value of the event which tells us if it's either "All", "lowPrice", "highPrice". It makes it dynamic depending of the value of the filter choosed.
        props.sortByPrice(event.target.value)
    }

    return (
        <div className="filter-container">
            <Menu text vertical>
                <Menu.Item header>Sort By Price</Menu.Item>
                <Form>
                    <div className="sort-by-input">
                        <Form.Input
                            className="sort-input-field"
                            checked={props.sortValue === "All"} // the state control the form through the checked from the state.
                            name="All"
                            value="All"
                            onChange={handleAllPrice} // the form controls the state with every input dynamically changing the state with the handleAllPrice function.
                        />
                        <label className="sort-label-tag">Any Price</label>
                    </div>
                </Form>
                <Form>
                    <div className="sort-by-input">
                        <Form.Input
                            className="sort-input-field"
                            checked={props.sortValue === "lowPrice"} // the state control the form through the checked from the state.
                            type="radio"
                            name="lowPrice"
                            value="lowPrice"
                            onClick={handleAllPrice} // the form controls the state with every input dynamically changing the state with the handleAllPrice function.
                            />
                        <label className="sort-label-tag">Lowest to Highest</label>
                    </div>
                </Form>
                <Form>
                    <div className="sort-by-input">
                        <Form.Input
                            className="sort-input-field"
                            checked={props.sortValue === "highPrice"} // the state control the form through the checked from the state.
                            type="radio"
                            name="highPrice"
                            value="highPrice"
                            onChange={handleAllPrice} // the form controls the state with every input dynamically changing the state with the handleAllPrice function.
                        />
                        <label className="sort-label-tag">Highest to Lowest</label>
                    </div>
                </Form>
            </Menu>
        </div>
    );
};


// Any time the store is updated, mapStateToProps will be called. The results of mapStateToProps will be merged into the wrapped component’s props.
const mapStateToProps = (state) => {
    return{
        items: state.items,
        sortValue: state.items.sortValue
    }
}

// connect, connects the component with redux to provide the piece of data needed from the store. The first argument of connect must be the function that merge the state to the component's props like mapStateToProps, second argument like { sortByPrice } an ES6 destructuring feature must be the function(s) that dispatches the actions to the store.
export default connect(mapStateToProps, { sortByPrice })(FilterItemsContainer);