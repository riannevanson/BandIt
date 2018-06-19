export default (state = {}, action = {}) => {
  switch (action.type) {
  case 'SET_LIKE':
    return action.payload
  default:
    return state
  }
}
