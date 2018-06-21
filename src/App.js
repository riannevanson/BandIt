import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import  SwipePageContainer  from './components/SwipePageContainer'

import Card from './components/Card'
import SettingsContainer from './components/SettingsContainer'
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
          <Route exact path={"/settings"} component={ SettingsContainer } />
        </main>
      </div>
      </Provider>


    );
  }
}

export default App;
