import React, { Component } from 'react'
import { loginForm } from '../actions/SignUpForm'
import { connect } from 'react-redux'

class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: ''
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value})
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value})
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value})
  }
  handleConfirmChange = (event) => {
    this.setState({ confirm: event.target.value})
  }

  submit = () => {
    this.props.signUpForm(this.state.name, this.state.email, this.state.password, this.state.confirm)
    console.log(this.state)

  }

  render() {
    console.log(this.state)
    return (
      <div className="SignUpForm">
      <div className="input-row">
        <label>Name</label>
        <input onChange={ this.handleNameChange } type="text"/>
        <span className="error"></span>

        <label>Email</label>
        <input onChange={ this.handleEmailChange } type="text"/>
        <span className="error"></span>

        <label>Password</label>
        <input onChange={ this.handlePasswordChange } type="text"/>
        <span className="error"></span>

        <label>Confirm Password</label>
        <input onChange={ this.handleConfirmChange } type="text"/>
        <span className="error"></span>

        <button onClick={ this.submit }>Sign up</button>
        <h1>{ this.props.newUser.username }</h1>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    newUser: state.SignUpForm
  };
};

export default connect(mapStateToProps, { SignUpForm })(SignUpForm)
