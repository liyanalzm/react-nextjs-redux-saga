import {actionTypes} from './actions'
import update from "react-addons-update";
export const exampleInitialState = {
  count: 10,
  error: null,
  lastUpdate: 0,
  light: false,
  movies: null,
  show:null,
  searchData: '',
  isFetching: false
}

function reducer (state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{error: action.error, isFetching: false}
      }

    case actionTypes.LOAD_DATA:
      return {
        ...state,
        ...{isFetching: true}
      }
    
    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{movies: action.data, isFetching: false}
      }
    
    case actionTypes.LOAD_DATA_FAILED:
      return {
        ...state,
        ...{movies: null}
      }

    case actionTypes.GET_SEARCH_DATA:
      const { key, value } = action.payload;
        return update(state, {
          searchData: {
              $set: value
          } 
          
        }
      )
      
    case actionTypes.GET_DATA:
      return {
        ...state,
        ...{isFetching: true}
      }

    case actionTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        ...{show: action.payload, isFetching: false}
      }
    
    case actionTypes.GET_DATA_FAILED:
      return {
        ...state,
        ...{show: null, isFetching: false}
      }
    default:
      return state
  }
}

export default reducer;
