import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SET_LOADING,
  LOGS_ERROR,
  UPDATE_LOG
} from './types'

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

// Update log from db server
export const updateLog = log => async dispatch => {
  try {
    dispatch(setLoading())

    await fetch(`/logs/${log.id}`, {
      method: 'put',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    dispatch({
      type: UPDATE_LOG,
      payload: log
    })
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    })
  }
}

export const setCurrent = log => dispatch => {
  dispatch({
    type: SET_CURRENT,
    payload: log
  })
}

export const clearCurrent = () => dispatch => {
  dispatch({
    type: CLEAR_CURRENT
  })
}

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
