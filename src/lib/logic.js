import {musicians} from './musicians.js'

const musicianCards = musicians.name

export const randomCard = () => {
  return musicians[Math.floor(Math.random() * musicians.length)]
}
