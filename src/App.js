import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component' 
import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

//TODO:
// SHOW NOTIFICATION ON SIGN IN SIGN OUT - MATERIAL TOAST

class App extends React.Component {
  const { setCurrentUser } = this.props;
  componentDidMount(){
    this.unsusbscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
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
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser:  user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
