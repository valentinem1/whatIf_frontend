import React, { Component } from 'react';

import ItemContainer from './ItemContainer'
import FilterItemsContainer from './FilterItemsContainer'
import SearchForm from './SearchForm'

class HomeContainer extends Component {

    render() {
        return (
            <div>
                <SearchForm />
                <div className="home-page">
                    <ItemContainer />
                    <FilterItemsContainer />
                </div>
            </div>
        );
    }
    
}

export default HomeContainer;