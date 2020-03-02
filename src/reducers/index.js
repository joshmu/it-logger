import { combineReducers } from 'redux'
import logReducer from './logReducer'
import techReducer from './techReducer'

export default combineReducers({ logState: logReducer, techState: techReducer })
