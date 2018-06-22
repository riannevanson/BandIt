import React, { Component } from 'react'
import { signUpForm } from '../actions/NewUser'
import { connect } from "react-redux";
import { Link } from "react-router-dom"


class NewUser extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirm: ''
  }

  handleUserNameChange = (event) => {
    this.setState({ username: event.target.value})
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
    this.props.signUpForm(this.state.username, this.state.email, this.state.password, this.state.confirm)

  }
  render() {

    return (
      <div className="newUser">
        <div className="input-row">
          <label>UserName</label>
          <input onChange={this.handleUserNameChange} type="text"/>
          <span className="error"></span>

          <label>Email</label>
          <input onChange={this.handleEmailChange} type="text"/>
          <span className="error"></span>

          <label>Password</label>
          <input onChange={this.handlePasswordChange} type="text"/>
          <span className="error"></span>

          <label>Confirm Password</label>
          <input onChange={this.handleConfirmChange} type="text"/>
          <span className="error"></span>

          <Link to={`/`}> <button onClick={this.submit}>Submit</button> </Link>
          {/* <h1>{ this.props.newUser.username }</h1> */}

        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {

  return {
    newUser: state.NewUser
  };
};
export default connect(mapStateToProps, { signUpForm})(NewUser)
