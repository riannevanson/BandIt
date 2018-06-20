import { musicians } from "../lib/musicians";

export default (state = musicians, action = {}) => {
  console.log(state, state.length)
  switch (action.type) {
    case "SET_DISLIKE": {
      return state.filter(musician => {
        return musician.id !== action.payload.id
      })
    }
    default:
      return state;
  }
};
