import {delay} from 'redux-saga'
import {all, call, put, take, takeLatest, fork, takeEvery} from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'
import {actionTypes, failure, loadDataSuccess, tickClock, getDataSuccess} from './actions.js'

import axios from "axios";  

es6promise.polyfill()

function * loadDataSaga (search) {  
  try {
    const res = yield fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = yield res.json();
    const results = yield call(searchData, {data, search})
    yield put(loadDataSuccess(results))
  } catch (err) { 
    yield put(failure(err))
  }
}

function searchData (payload) {
  const { data, search } = payload;
  const results = [];
  for(var i=0; i<data.length;i++) {
    if(data[i].show.name.toUpperCase().includes(search.search.toUpperCase())){
      results.push(data[i])
    }
  }
  return results;
}

function * getDataSaga (action) {
  try {
    const { id } = action;
    yield put({
      type: 'GET_SEARCH_DATA',
      payload: {
        key: "id",
        value: id
      }
    })

    const res = yield fetch(`https://api.tvmaze.com/shows/${id}`)
    const data = yield res.json()
    if (res.status >= 200 && res.status < 300) {
      yield put({
        type: 'GET_DATA_SUCCESS',
        payload: data,
      })
    } else {
      yield put(failure(data))
    }
   
  } catch (err) {
    yield put(failure(err))
  }
}

export function * movieSaga () {
    yield all([
      fork(takeLatest, 'LOAD_DATA', loadDataSaga),
      fork(takeLatest, 'GET_DATA', getDataSaga)
    ])
}