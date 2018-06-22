import React, { Component } from 'react'
import { signUpForm } from '../actions/NewUser'
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import LOGO from '../lib/icons/LOGO.svg'


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
      <div className="UserContainer">
        <div className="input-row">
          <img src={LOGO} className="logo" alt="logo" />
            <h3 className='SignIn'>Sign Up</h3>

          <input  className='input1' onChange={this.handleUserNameChange} type="text" placeholder='Username'/>
          <span className="error"></span>


          <input className='input1' onChange={this.handleEmailChange} type="text" placeholder='Email'/>
          <span className="error"></span>


          <input className='input1' onChange={this.handlePasswordChange} type="text" placeholder='Password'/>
          <span className="error"></span>


          <input className='input1' onChange={this.handleConfirmChange} type="text" placeholder='Confirm Password'/>
          <span className="error"></span>

          <Link to={`/`}> <button onClick={this.submit} className="button">Submit</button> </Link>
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
