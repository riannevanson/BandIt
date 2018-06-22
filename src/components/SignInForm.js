import React, { Component } from 'react'
import { submitForm } from '../actions/form'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

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
        <label>UserName</label>
        <input onChange={this.handleUserNameChange} type="text"

        //    value='Username'maxlength="19" onfocus="if(this.value === this.defaultValue)this.value=''"
        // onblur="if(this.value==='')this.value=this.defaultValue"
/>

        <span className="error"></span>
        <label>Password</label>
        <input onChange={this.handlePasswordChange} type="text" />
        <span className="error"></span>
        <h4>Forgot your password? <Link to={"/sign_in"}>Click here</Link></h4>
    <Link to={`/`}><button onClick={this.submit}>Submit</button> </Link>

        <h4>New user?<Link to={"/newUser"}> Sign Up</Link></h4>



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
