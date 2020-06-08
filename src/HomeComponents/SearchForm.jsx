import React from 'react';
import { connect } from 'react-redux'
import { searchItems } from '../Actions/itemsActions'
import { Form } from 'semantic-ui-react'

const SearchForm = (props) => {

    // Gets called every time a change is made in the search form. It makes the form dynamic and allows to dynamically set the state.
    const handleChange = (event) => {
        // set the search value to the input from the search form to the state by calling the searchItems action which will trigger the store to call the reducer to change the state. 
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
                    value={props.search} // the state control the form through the value from the state.
                    onChange={handleChange} // the form controls the state with every input dynamically changing the state with the handleChange function.
                />
            </Form>
        </div>
    );
};

// connect, connects the component with redux to provide the piece of data needed from the store. The first argument of connect must be the function that merge the state to the component's props like mapStateToProps if no mapStateToProps is needed with sed the first argument to null. The second argument like { searchItems } an ES6 destructuring feature must be the function(s) that dispatches the actions to the store.
export default connect(null, { searchItems })(SearchForm);