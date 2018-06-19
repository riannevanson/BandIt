export const SET_LIKE = 'SET_LIKE'
export const SET_DISLIKE = 'SET_DISLIKE'

export function setLike(newLike) {
  return {
    type: SET_LIKE,
    payload: [...state, newLike]
  }
}

export function setDislike() {
  return {
    type: SET_DISLIKE,
    payload: ...state
  }
}
