export const actionTypes = {
  FAILURE: 'FAILURE',
  SUBMIT_FORM: 'SUBMIT_FORM',
  LOAD_DATA: 'LOAD_DATA',
  GET_DATA: 'GET_DATA',
  GET_SEARCH_DATA: 'GET_SEARCH_DATA',
  GET_DATA_SUCCESS: 'GET_DATA_SUCCESS',
  GET_DATA_FAILED: 'GET_DATA_FAILED',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  LOAD_DATA_FAILED: 'LOAD_DATA_FAILED',
  START_CLOCK: 'START_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK'
}

export function failure (error) {
  return {
    type: actionTypes.FAILURE,
    error
  }
}

export function submitForm (data) {
  return {type: actionTypes.SUBMIT_FORM, data}
}

export function loadData (search) {
  return {type: actionTypes.LOAD_DATA, search}
}

export function getData (id) {
  return {
    type: actionTypes.GET_DATA, id
  }
}

export function getSearchData (data) {
  return {
    type: actionTypes.GET_SEARCH_DATA, 
    payload: data
  }
}

export function loadDataSuccess (data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data
  }
}

export function getDataSuccess (data) {
  return {
    type: actionTypes.GET_DATA_SUCCESS,
    data
  }
}

export function startClock () {
  return {type: actionTypes.START_CLOCK}
}

export function tickClock (isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now()
  }
}
