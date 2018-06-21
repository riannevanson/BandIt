export default (state = {}, action = {}) => {
  switch (action.type) {
    case 'NEW_CARD':
      return action.payload
    default:
      return state
  }
}
