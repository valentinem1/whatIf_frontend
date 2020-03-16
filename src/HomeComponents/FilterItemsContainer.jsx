import React from 'react';
import { Menu, Form, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { sortAllPrice, sortLowPrice, sortHighPrice } from '../Actions/itemsActions'

const FilterItemsContainer = (props) => {

    const handleAllPrice = (event) => {
        props.sortAllPrice(event.target.value)
    }

    const handleLowPrice = (event) => {
        props.sortLowPrice(event.target.value)
    }

    const handleHighPrice = (event) => {
        props.sortHighPrice(event.target.value)
    }

    return (

        <div className="filter-container">
            <Menu text vertical>
                <Menu.Item header>Sort By</Menu.Item>
                <Form>
                    <Label>Any Price</Label>
                    <Form.Input
                        disabled={props.checkLow || props.checkHigh ? true : false}
                        checked={props.checkAll}
                        type="checkbox"
                        name="All"
                        value="All"
                        onChange={handleAllPrice}
                    />
                </Form>
                <Form>
                    <Label>price: Lowest to Highest</Label>
                    <Form.Input
                        disabled={props.checkAll || props.checkHigh ? true : false}
                        checked={props.checkLow}
                        type="checkbox"
                        name="lowPrice"
                        value="lowPrice"
                        onClick={handleLowPrice}
                        />
                </Form>
                <Form>
                    <Label>price: Highest to Lowest</Label>
                    <Form.Input
                        disabled={props.checkAll || props.checkLow ? true : false}
                        checked={props.checkHigh}
                        type="checkbox"
                        name="highPrice"
                        value="highPrice"
                        onChange={handleHighPrice}
                    />
                </Form>
            </Menu>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        items: state.items,
        checkAll: state.items.checkAll,
        checkLow: state.items.checkLow,
        checkHigh: state.items.checkHigh
    }
}

export default connect(mapStateToProps, { sortAllPrice, sortLowPrice, sortHighPrice })(FilterItemsContainer);