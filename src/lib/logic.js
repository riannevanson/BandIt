
//const musicianCards = musicians.name

export const randomCard = (musicians) => {
  return musicians[Math.floor(Math.random() * musicians.length)]
}


// export const filterMusicians = () => {
//   return musicians[musicians.filter(
//   (item, index) => index !== action.index)]
// }
