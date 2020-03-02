import React, { Component } from 'react';
import './App.css'

import { withRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'

import HeaderContainer from './HeaderContainer'
import HomeContainer from './HomeComponents/HomeContainer'
// import LoginSignupForm from './LoginSignupForm'
import ProfileContainer from './ProfileComponents/ProfileContainer'
import ItemShowContainer from './ItemComponents/ItemShowContainer'
import CartContainer from './CartComponents/CartContainer'
import OrderContainer from './OrderComponents/OrderContainer'

import { connect } from 'react-redux'
import { fetchItems } from './Actions/itemsActions'
import { userPersist } from './Actions/userActions'
import { fetchReviews } from './Actions/reviewActions'

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:4000/items')
    .then(r => r.json())
    .then(itemsData => {
      this.props.fetchItems(itemsData)
    })

    if(localStorage.token){
      fetch('http://localhost:4000/persist', {
        headers: {
          "Authorization": `bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then(userData => {
        if(userData.token){
          // console.log(userData.user)
          this.props.userPersist(userData.user)
        }
      })
    }

      // fetch('http://localhost:4000/reviews')
      // .then(r => r.json())
      // .then(reviewsArr => {
      //     console.log(reviewsArr)
      //     this.props.fetchReviews(reviewsArr)
      // })
  }
  
  render() {

    return (

      <div>

        <HeaderContainer historyProps={this.props}/>

        <Switch>
          <Route exact path="/" component={ HomeContainer } />
          <Route exact path="/profile" component={ ProfileContainer } />
          <Route exact path="/cart" component={ CartContainer } />
          <Route exact path="/orders" component={ OrderContainer } />
          <Route path='/:id' component={ ItemShowContainer } />
        </Switch>

      </div>

    );
  }
}

{/* <Route exact path='/login' component={ LoginSignupForm }/>
<Route exact path='/signup' component={ LoginSignupForm }/> */}

export default connect(null, { fetchItems, userPersist, fetchReviews })(withRouter(App));
