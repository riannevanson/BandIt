export const SET_LIKE = 'SET_LIKE'
export const SET_DISLIKE = 'SET_DISLIKE'

export function setLike(randomUser) {
  console.log('Im liked!')
  return {
    type: SET_LIKE,
    payload: randomUser
  }
}

export function setDislike(randomUser) {
  console.log('i am not being liked boohoo')
  return {
    type: SET_DISLIKE,
    payload: randomUser
  }
}
