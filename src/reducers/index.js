import { combineReducers } from 'redux'
import  musicians  from './musicians'
import  MatchedArtists  from './MatchedArtists'
import newCard from './newCard'
import form from './form'
import NewUser from './NewUser'
import newBand from './newBand'


export default combineReducers({
  musicians,
  MatchedArtists,
  newCard,
  form,
  NewUser,
  newBand

})
