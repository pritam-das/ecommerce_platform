import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component' 
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

//TODO:
// SHOW NOTIFICATION ON SIGN IN SIGN OUT - MATERIAL TOAST
//PULL SHOP.DATA.JS from firestore
//WHEN CART DROPDOWN IS EMPTY IT SHOULD SHOW TEXT THAT ITS EMPTY

class App extends React.Component {
  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsusbscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        })
      }
      else{
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount(){
    this.unsusbscribeFromAuth();
  }

  unsusbscribeFromAuth = null;
  
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path ='/' component={ HomePage }/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser:  user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
