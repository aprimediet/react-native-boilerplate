import { HTTP_REQUEST, HTTP_SUCCESS, HTTP_FAILURE } from '@/constants/ActionTypes'
import { takeLatest, call, put, select } from 'redux-saga/effects'
import request from '@/utils/request'

const setAuthorizationHeader = (session, headers = {}) => {
  const { authenticated, token } = session

  if (authenticated) {
    // Set Authorization header if authenticated
    // user detected in session
    return {
      ...headers,
      Authorization: `Bearer ${token}`,
    }
  }

  return headers
}

export function* httpRequest(options) {
  try {
    // Set HTTP Request to track http state
    yield put({ type: HTTP_REQUEST })

    // Get Session from state
    const session = yield select((state) => state.session)

    // Set authorization headers from token in session
    const headers = yield call(setAuthorizationHeader, session, options.headers)

    // Define final headers for http request
    const finalOptions = {
      ...options,
      headers,
    }

    // Do http Request
    const response = yield call(request, finalOptions)

    // Set HTTP Success state
    yield put({ type: HTTP_SUCCESS })

    return response
  } catch (error) {
    // Set HTTP Error State
    yield put({ type: HTTP_FAILURE, payload: { error } })
  }

  return null
}

export function* httpFailure() {
  console.log('An HTTP Error Ocurred') // eslint-disable-line no-console
}

export function* httpWatcher() {
  yield takeLatest(HTTP_FAILURE, httpFailure)
}
