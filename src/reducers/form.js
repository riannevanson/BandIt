import { SUBMIT_FORM } from '../actions/form'

const initialState = {}

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case SUBMIT_FORM:
    return action.payload
  default:
    return state
  }
}
