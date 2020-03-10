import React, { Component } from 'react';

import ItemContainer from './ItemContainer'
import FilterItemsContainer from './FilterItemsContainer'

class HomeContainer extends Component {

    render() {

        return (

            <div className="home-page">
                <ItemContainer />
                <FilterItemsContainer />
            </div>
            
        );
    }
    
}

export default HomeContainer;