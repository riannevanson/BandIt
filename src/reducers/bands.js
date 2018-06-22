import { bands } from "../lib/bands";

export default (state = bands, action = {}) => {
  console.log(state, state.length)
  switch (action.type) {
    case "SET_DISLIKE": {
      return state.filter(band => {
        return band.id !== action.payload.id
      })
    }
    default:
      return state;
  }
};
