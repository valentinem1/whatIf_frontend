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

  // It gets called after render() method is called.
  // Allows to fetch data from api to change the state.
  componentDidMount() {
    fetch('https://watif-api.herokuapp.com/items')
    .then(r => r.json())
    // get response from backend with all the items.
    .then(itemsData => {
      //using redux calling fetchItems action which will trigger the store to call the reducer to change the state.
      this.props.fetchItems(itemsData)
    })

    // check if localStorage has a token
    // if yes it means someone is logged in and need to persist on the page if refresh or leave the page.
    if(localStorage.token){
      // then fetch to the backend to persist the user who's logged in.
      fetch('https://watif-api.herokuapp.com/persist', {
        headers: {
          // by passing the token in the headers the backend gets access to it set the user token and encode(script it) it. A token get assigned at each sign-in/sign-up.
          "Authorization": `bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      //get response from backend with the instance of the logged user.
      .then(userData => {
        if(userData.token){
          // set the user to the state by calling the userPersist action which will trigger the store to call the reducer to change the state.
          this.props.userPersist(userData.user)
        }
      })
    }
  }
  // gets call first to mount the component to the dom and render the html.
  render() {
    // allows to return something. If no html there null will work.
    return (
      <div>
        {/* App.js get access to many props especially the history which allows to get access to the url pathname etc... */}
        <HeaderContainer historyProps={this.props}/>

        <Switch>
          {/* Allows you to define routes for pages. Ex: going to "/" will bring you to the home page. By putting the exact key word it forces to have a path that exactly matches "/". It avoids typing anything and always bringing you to the home page. */}
          <Route exact path="/" component={ HomeContainer } />
          <Route exact path="/profile" render={localStorage.token ? (routerProps) => <ProfileContainer routerProps={routerProps}/> : (routerProps) => <NotFound />} />
          <Route exact path="/cart" component={ localStorage.token ? (routerProps) => <CartContainer routerProps={routerProps}/>  : (routerProps) => <NotFound />} />
          {/* path='/:id' the : allows dynamic routing so for each items by clicking on it the id number of the item will be displayed in the url. */}
          <Route path='/:id' component={ ItemShowContainer } />
        </Switch>

        <Footer />
      </div>
    );
  }
}

// withRouter gives acces to the history props to the component wrapped in (). In that situation App.js.
export default connect(null, { fetchItems, userPersist })(withRouter(App));