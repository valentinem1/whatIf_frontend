import React from 'react';
import { connect } from 'react-redux'
import { searchItems } from '../Actions/itemsActions'
import { Form } from 'semantic-ui-react'

const SearchForm = (props) => {

    const handleChange = (event) => {
        props.searchItems(event.target.value)
    }

    return (
        <div className="search-form">
            <Form >
                <Form.Input
                    className="search-input"
                    icon="search"
                    name="search"
                    placeholder="Search for items..."
                    value={props.search}
                    onChange={handleChange}
                />
            </Form>
        </div>
    );
};

export default connect(null, { searchItems })(SearchForm);