import { GET_LOGS, ADD_LOG, DELETE_LOG, SET_LOADING, LOGS_ERROR } from './types'

// Get logs from server
export const getLogs = () => async dispatch => {
  try {
    dispatch(setLoading())

    const res = await fetch('/logs')
    const data = await res.json()

    dispatch({
      type: GET_LOGS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    })
  }
}

// Add log to db server
export const addLog = log => async dispatch => {
  try {
    dispatch(setLoading())

    const res = await fetch('/logs', {
      method: 'post',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()

    dispatch({
      type: ADD_LOG,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    })
  }
}

// Remove log from db server
export const removeLog = id => async dispatch => {
  try {
    dispatch(setLoading())

    await fetch(`/logs/${id}`, {
      method: 'delete'
    })

    dispatch({
      type: DELETE_LOG,
      payload: id
    })
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    })
  }
}

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
