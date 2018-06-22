import { SIGNUP_FORM } from '../actions/NewUser'

const initialState = {}

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case SIGNUP_FORM:
    return action.payload
  default:
    return state
  }
}
