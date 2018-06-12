/* global fetch */
import {all, fork, takeLatest} from 'redux-saga/effects'
import { movieSaga } from '../pages/movies/saga'
import es6promise from 'es6-promise'


es6promise.polyfill()

function * rootSaga () {
  yield all([
    fork(movieSaga)
  ])
}

export default rootSaga
