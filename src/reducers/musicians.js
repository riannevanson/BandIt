import { musicians } from "../lib/musicians";

export default (state = musicians, action = {}) => {
  switch (action.type) {
    case "SET_DISLIKE": {
      return {
        musicians: musicians.filter(
          (item, index) => index !== action.index
        )
      };
    }
    default:
      return state;
  }
};
