import { AsyncStorage } from 'react-native'
import { applyMiddleware, createStore, compose } from 'redux'
import { persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { combineReducers } from 'redux-immutable'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { fromJS } from 'immutable'

// Import reducers
import global from '@/stores/global/reducer'
import http from '@/stores/http/reducer'
import session from '@/stores/session/reducer'

// Import saga
import { httpWatcher } from '@/stores/http/saga'

// Initial state
const initialState = fromJS({})

// Create Redux Saga Middleware
const sagaMiddleware = createSagaMiddleware()

// Combine all reducers
const reducers = combineReducers({
  global,
  http,
  session,
})

// Create root Saga
function* rootSaga() {
  yield all([httpWatcher()])
}

// Configure persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['http'],
}

// Create persist reducers
const persistedReducer = persistReducer(persistConfig, reducers)

// Create store
export default () => {
  const store = createStore(
    persistedReducer,
    initialState,
    compose(applyMiddleware(sagaMiddleware))
  )

  // Run saga
  sagaMiddleware.run(rootSaga)

  return store
}
