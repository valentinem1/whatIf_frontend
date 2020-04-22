import React, { Component } from 'react';
import './App.css'

import { withRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'

import HeaderContainer from './HeaderContainer'
import HomeContainer from './HomeComponents/HomeContainer'
import ProfileContainer from './ProfileComponents/ProfileContainer'
import ItemShowContainer from './ItemComponents/ItemShowContainer'
import CartContainer from './CartComponents/CartContainer'
import NotFound from './NotFound'
import Footer from './Footer'

import { connect } from 'react-redux'
import { fetchItems } from './Actions/itemsActions'
import { userPersist } from './Actions/userActions'

class App extends Component {

  componentDidMount() {
    fetch('https://watif-app-api.herokuapp.com/items')
    .then(r => r.json())
    .then(itemsData => {
      this.props.fetchItems(itemsData)
    })

    if(localStorage.token){
      fetch('https://watif-app-api.herokuapp.com/persist', {
        headers: {
          "Authorization": `bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then(userData => {
        if(userData.token){
          this.props.userPersist(userData.user)
        }
      })
    }
  }
  
  render() {
    return (
      <div>
        <HeaderContainer historyProps={this.props}/>

        <Switch>
          <Route exact path="/" component={ HomeContainer } />
          <Route exact path="/profile" render={localStorage.token ? (routerProps) => <ProfileContainer routerProps={routerProps}/> : (routerProps) => <NotFound />} />
          <Route exact path="/cart" component={ localStorage.token ? (routerProps) => <CartContainer routerProps={routerProps}/>  : (routerProps) => <NotFound />} />
          <Route path='/:id' component={ ItemShowContainer } />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default connect(null, { fetchItems, userPersist })(withRouter(App));