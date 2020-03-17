import React from 'react';
import { Menu, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { sortByPrice } from '../Actions/itemsActions'

const FilterItemsContainer = (props) => {

    const handleAllPrice = (event) => {
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
                            checked={props.sortValue === "All"}
                            type="radio"
                            name="All"
                            value="All"
                            onChange={handleAllPrice}
                        />
                        <label className="sort-label-tag">Any Price</label>
                    </div>
                </Form>
                <Form>
                    <div className="sort-by-input">
                        <Form.Input
                            className="sort-input-field"
                            checked={props.sortValue === "lowPrice"}
                            type="radio"
                            name="lowPrice"
                            value="lowPrice"
                            onClick={handleAllPrice}
                            />
                        <label className="sort-label-tag">Lowest to Highest</label>
                    </div>
                </Form>
                <Form>
                    <div className="sort-by-input">
                        <Form.Input
                            className="sort-input-field"
                            checked={props.sortValue === "highPrice"}
                            type="radio"
                            name="highPrice"
                            value="highPrice"
                            onChange={handleAllPrice}
                        />
                        <label className="sort-label-tag">Highest to Lowest</label>
                    </div>
                </Form>
            </Menu>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        items: state.items,
        sortValue: state.items.sortValue
    }
}

export default connect(mapStateToProps, { sortByPrice })(FilterItemsContainer);