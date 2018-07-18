import { HTTP_REQUEST, HTTP_SUCCESS, HTTP_FAILURE } from '@/constants/ActionTypes'
import { fromJS } from 'immutable'

const initialState = fromJS({
  isFetching: false,
  error: false,
  receivedAt: null,
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HTTP_REQUEST:
      return state
        .set('isFetching', true)
        .set('error', false)
        .set('receivedAt', null)
    case HTTP_SUCCESS:
      return state
        .set('isFetching', false)
        .set('error', false)
        .set('receivedAt', Date.now())
    case HTTP_FAILURE:
      return state
        .set('isFetching', false)
        .set('error', payload.error)
        .set('receivedAt', Date.now())
    default:
      return state
  }
}
