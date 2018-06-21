import React, { Component } from 'react'
import { submitForm } from '../actions/form'
import { connect } from 'react-redux'

class SignInForm extends Component {
  state = {
    username: '',
    password: '',
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
    console.log(this.state)
    return (
      <div className="SignInForm">
      <div className="input-row">
        <label>UserName</label>
        <input onChange={this.handleUserNameChange} type="text"/>
        <span className="error"></span>
        <label>Password</label>
        <input onChange={this.handlePasswordChange} type="text"/>
        <span className="error"></span>
        <button onClick={this.submit}>Submit</button>
        <h1>{ this.props.currentUser.username }</h1>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    currentUser: state.form
  };
};

export default connect(mapStateToProps, { submitForm })(SignInForm)
