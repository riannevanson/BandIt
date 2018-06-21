import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import  SwipePageContainer  from './components/SwipePageContainer'
import MatchContainer from './components/MatchContainer'
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
          {/* <Route exact path={"/match"} component={ MatchContainer } /> */}
        </main>
      </div>
      </Provider>


    );
  }
}

export default App;
