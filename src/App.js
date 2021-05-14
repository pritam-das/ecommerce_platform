import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
// import ShopPage from './pages/shop/shop.component'
// import Header from './components/header/header.component'
// import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component' 
import { Switch, Route } from 'react-router-dom';
// import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
  }

  componentWillUnmount(){
  }
  
  render() {
    return (
      <Switch>
         <Route path ='/' component={ HomePage }/>
      </Switch>
    );
  }
}

export default App;
