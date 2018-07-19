import {
  POSTS_FETCH,
  POSTS_RETRIEVE,
  POSTS_ADD,
  POSTS_SET,
  POSTS_SET_INFO,
  POSTS_RESET,
} from '@/constants/ActionTypes'
import { fromJS } from 'immutable'

const initialState = fromJS({
  receivedAt: null,
  total: 0,
  totalPages: 0,
  collections: [],
  model: null,
})

export default (state = initialState, { type, payload = undefined }) => {
  switch (type) {
    case POSTS_FETCH:
    case POSTS_RETRIEVE:
    case POSTS_ADD:
      if (payload) {
        return state
          .set('collections', state.get('collections').merge(fromJS(payload.collections)))
          .set('receivedAt', Date.now())
      }
    // eslint-disable-line no-fallthrough
    case POSTS_SET:
      if (payload) {
        return state.set('model', payload.model).set('receivedAt', Date.now())
      }
    // eslint-disable-line no-fallthrough
    case POSTS_SET_INFO:
      if (payload) return state.set('total', payload.total).set('totalPages', payload.totalPages)
    // eslint-disable-line no-fallthrough
    case POSTS_RESET:
      return initialState
    default:
      return state
  }
}
