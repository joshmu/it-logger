import { GET_TECHS, ADD_TECH, DELETE_TECH, TECH_ERROR } from '../actions/types'

const initialState = {
  techs: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        error: null
      }
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        error: null
      }
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter(tech => tech.id !== action.payload),
        error: null
      }
    case TECH_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}