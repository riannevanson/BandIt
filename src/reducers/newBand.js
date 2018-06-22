import { PROFILE_FORM } from '../actions/NewBand'
import { bands } from "../lib/bands";

const initialState = bands

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case PROFILE_FORM:
    return [...state, action.payload]
  default:
    return state
  }
}
