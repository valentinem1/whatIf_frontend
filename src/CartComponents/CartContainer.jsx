import React from 'react';

import ItemInCartContainer from './ItemInCartContainer'
import CheckoutCardContainer from './CheckoutCard'

import { Divider, Grid, Segment } from 'semantic-ui-react'

const CartContainer = (props) => {
    // console.log(props)
    return (

        <Segment>

            <Grid columns={2} relaxed='very'>

                <Grid.Column>
                    <ItemInCartContainer />
                
                </Grid.Column>

                <Grid.Column>
                    <CheckoutCardContainer />
                </Grid.Column>

            </Grid>

            <Divider vertical>Cart</Divider>
        </Segment>

        // <div>
        //     <CheckoutCardContainer />
        // </div>
    );

};

export default CartContainer;