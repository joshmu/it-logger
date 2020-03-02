import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SET_LOADING,
  LOGS_ERROR,
  UPDATE_LOG,
  SEARCH_LOGS
} from './types'

// Get logs from server
export const getLogs = () => async dispatch => {
  try {
    dispatch(setLoading())

    const res = await fetch('/api/logs')
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

    const res = await fetch('/api/logs', {
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

    await fetch(`/api/logs/${id}`, {
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

    const res = await fetch(`/api/logs/${log.id}`, {
      method: 'put',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()

    dispatch({
      type: UPDATE_LOG,
      payload: data 
    })
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    })
  }
}

export const searchLogs = text => async dispatch => {
  const res = await fetch(`/api/logs/${text}`)
  const data = await res.json()
  dispatch({
    type: SEARCH_LOGS,
    payload: data
  })
}

export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  }
}

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  }
}

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
