import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import  SwipePageContainer  from './components/SwipePageContainer'
import MatchContainer from './components/MatchContainer'


class App extends Component {
  render() {
    return (
     <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Route exact path={"/"} component={ SwipePageContainer } />
          <Route exact path={"/match"} component={ MatchContainer } />
        </main>
      </div>
      </Provider>


    );
  }
}

export default App;
