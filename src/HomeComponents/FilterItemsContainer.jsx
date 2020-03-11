import React from 'react';
import { Menu, Checkbox, Form, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { sortByHighPrice } from '../Actions/itemsActions'

const FilterItemsContainer = (props) => {

    const clickingHighPrice = (event) => {
        props.sortByHighPrice(event.target.checked)
        console.log(props.highPrice)
    }

    const clickingLowPrice = (event) => {
        console.log(event.target.checked)
    }

    return (

        <div className="filter-container">
            <Menu text vertical>
                <Menu.Item header>Sort By</Menu.Item>
                <Form>
                    <Label>price: Highest to Lowest</Label>
                    <Form.Input
                        type="checkbox"
                        name="highPrice"
                        value={props.highPrice}
                        onChange={clickingHighPrice}
                    />
                </Form>
                <Form>
                    <Label>price: Lowest to Highest</Label>
                    <Form.Input
                        type="checkbox"
                        name="lowPrice"
                        value={props.lowPrice}
                        onClick={clickingLowPrice}
                        />
                </Form>
            </Menu>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        items: state.items,
        highPrice: state.items.highPrice
    }
}

export default connect(mapStateToProps, { sortByHighPrice })(FilterItemsContainer);