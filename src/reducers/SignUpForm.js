import { LOGIN_FORM } from '../actions/SignUpForm'

const initialState = {}

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case LOGIN_FORM:
    return action.payload
  default:
    return state
  }
}
