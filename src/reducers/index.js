import { combineReducers } from 'redux'
import  musicians  from './musicians'
import  MatchedArtists  from './MatchedArtists'
import newCard from './newCard'

export default combineReducers({
musicians, MatchedArtists, newCard })
