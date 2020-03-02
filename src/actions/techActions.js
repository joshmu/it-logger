import {
  GET_TECHS,
  TECH_ERROR,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING
} from './types'

export const getTechs = () => async dispatch => {
  try {
    setLoading()
    const res = await fetch('/techs')
    const data = await res.json()
    dispatch({
      type: GET_TECHS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: TECH_ERROR,
      payload: err.response.data
    })
  }
}

export const addTech = tech => async dispatch => {
  try {
    setLoading()
    const res = await fetch('/techs', {
      method: 'post',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    dispatch({
      type: ADD_TECH,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: TECH_ERROR,
      payload: err.response.data
    })
  }
}

export const removeTech = id => async dispatch => {
  try {
    setLoading()
    await fetch(`/techs/${id}`, {
      method: 'delete'
    })
    dispatch({
      type: DELETE_TECH,
      payload: id
    })
  } catch (err) {
    dispatch({ type: TECH_ERROR, payload: err.response.data })
  }
}

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
