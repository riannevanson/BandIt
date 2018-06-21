import React, { Component } from 'react'
import { signUpForm } from '../actions/signUpForm'
import { connect } from 'react-redux'

class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: ''
  }

  handlePasswordChange = (event) => {
    this.setState({ name: event.target.value})
  }

  handleUserNameChange = (event) => {
    this.setState({ email: event.target.value})
  }

  handleUserNameChange = (event) => {
    this.setState({ password: event.target.value})
  }
  handleUserNameChange = (event) => {
    this.setState({ confirm: event.target.value})
  }

  submit = () => {
    this.props.signUpForm(this.state.name, this.state.email, this.state.password, this.state.confirm)

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

        <label>Confirm</label>
        <input onChange={ this.handleConfirmChange } type="text"/>
        <span className="error"></span>
        <button onClick={ this.signUp }>Sign up</button>
        {/* <h1>{ this.props.currentUser.name }</h1> */}
      </div>
    </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   console.log(state)
//   return {
//     currentUser: state.form
//   };
// };

export default connect(null, { SignUpForm })(SignUpForm)
