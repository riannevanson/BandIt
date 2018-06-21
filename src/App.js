import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import  SwipePageContainer  from './components/SwipePageContainer'
<<<<<<< HEAD
import MatchContainer from './components/MatchContainer'
import SignInForm from './components/SignInForm'
=======

import Card from './components/Card'
import SignIn from './components/SignIn'
>>>>>>> 4f3db318d6aa26ba5c28abb1222f8f54119225ee
import LOGO1 from './lib/icons/LOGO1.svg'


class App extends Component {
  render() {
    return (
    
     <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={LOGO1} className="App-logo" alt="logo" />
          {/* <h1 className="App-title">Bandit</h1> */}
        </header>

        <main className="App-intro">

          <Route exact path={"/"} component={ SwipePageContainer } />
<<<<<<< HEAD
          <Route exact path={"/sign_in"} component={ SignInForm } />
          {/* <Route exact path={"/match"} component={ MatchContainer } /> */}
=======
          <Route exact path={"/signin"} component={ SignIn } />
>>>>>>> 4f3db318d6aa26ba5c28abb1222f8f54119225ee
        </main>
      </div>
      </Provider>


    );
  }
}

export default App;
