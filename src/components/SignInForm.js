import React, { Component } from 'react'
import { submitForm } from '../actions/form'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import '../SignIn.css'
import LOGO from '../lib/icons/LOGO.svg'

class SignInForm extends Component {
  state = {
    username: '',
    password: ''
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value})
  }

  handleUserNameChange = (event) => {
    this.setState({ username: event.target.value})
  }

  submit = () => {
    this.props.submitForm(this.state.username, this.state.password)

  }

  render() {

    return (
      <div className="SignInContainer">
        <div className="input-row">
          <img src={LOGO} className="logo" alt="logo" />
          <h3 className='SignIn'>Sign In</h3>

          <input className='input1' onChange={this.handleUserNameChange} type="text" placeholder='Username'
          />

          <span className="error"></span>

          <input className='input1' onChange={this.handlePasswordChange} type="text" placeholder='Password' />
          <span className="error"></span>
          <h4 className="ForgetPassword">Forgot your password?

          <Link to={"/sign_in"} className="ForgetPassword">Click here</Link></h4>

          <Link to={`/`}><button onClick={this.submit} className="button" >Sign In</button> </Link>

          <h4 className='NewUser'>New user?<Link to={"/newUser"} className='LinkClickHere'> Sign Up</Link></h4>



        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    currentUser: state.form
  };
};

export default connect(mapStateToProps, { submitForm })(SignInForm)
