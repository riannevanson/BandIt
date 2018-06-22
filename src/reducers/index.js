import { combineReducers } from 'redux'
import  musicians  from './musicians'
import  MatchedArtists  from './MatchedArtists'
import newCard from './newCard'
import form from './form'
import SignUpForm from './SignUpForm'

export default combineReducers({
  musicians,
  MatchedArtists,
  newCard,
  form,
  SignUpForm
})
