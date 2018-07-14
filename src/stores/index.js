import { applyMiddleware, createStore, compose } from 'redux'
import { combineReducers } from 'redux-immutable'
import createSagaMiddleware from 'redux-saga'
import { fromJS } from 'immutable'

// Import reducers
import global from '@stores/global/reducer'

// Initial state
const initialState = fromJS({})

// Create Redux Saga Middleware
const sagaMiddleware = createSagaMiddleware()

// Combine all reducers
const reducers = combineReducers({
  global,
})

// Create store
export default createStore(reducers, initialState, compose(applyMiddleware(sagaMiddleware)))
