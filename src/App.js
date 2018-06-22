import React, { Component } from 'react'

import './App.css'
import { Route } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import  SwipePageContainer  from './components/SwipePageContainer'
// import MatchContainer from './components/MatchContainer'
import SignInForm from './components/SignInForm'
import NewUser from './components/NewUser'

import { Link } from "react-router-dom"

import SettingsContainer from './components/SettingsContainer'
import TextLogoBar from './lib/icons/TextLogoBar.svg'
import settings from './lib/icons/gear.svg'
// import likesIcon from './lib/icons/likesIcon.svg'
// import messages from './lib/icons/messages.svg'


class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <div className="App">
          <header className="App-header">

            {/* <img src={LOGO1} className="App-logo" alt="logo" /> */}

            <Link to={`/`}><img src={TextLogoBar} className="App-logo" alt="logo" /></Link>
            <div className="iconsContainer--header">
              <Link to={`/settings`}><img src={settings} className="Icon--header" alt="logo" /></Link>
              {/* <Link to={`/`}><img src={likesIcon} className="Icon--header" alt="logo" /></Link>
              <Link to={`/`}><img src={messages} className="Icon--header" alt="logo" /></Link> */}
            </div>


          </header>

          <main className="App-intro">

            <Route exact path={"/"} component={ SwipePageContainer } />

            <Route exact path={"/sign_in"} component={ SignInForm } />

            <Route exact path={"/newUser"} component={ NewUser } />



            <Route exact path={"/settings"} component={ SettingsContainer } />

          </main>
        </div>
      </Provider>


    )
  }
}

export default App;
