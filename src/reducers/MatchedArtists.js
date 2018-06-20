export default (state = [], action = {}) => {
  switch (action.type) {
    case 'SET_LIKE':
      return [...state, action.payload]
    default:
      return state;
  }
};
