import { POSTS_FETCH, POSTS_ADD, POSTS_SET, POSTS_RESET } from '@/constants/ActionTypes'
import { fromJS } from 'immutable'

const initialState = fromJS({
  data: null,
  receivedAt: null,
  total: 0,
  totalPages: 0,
})

export default (state = initialState, { type, payload = undefined }) => {
  switch (type) {
    case POSTS_FETCH:
    case POSTS_ADD:
      if (payload) {
        return state
          .set('data', [...state.get('data'), ...payload.data])
          .set('receivedAt', Date.now())
      }
    // eslint-disable-line no-fallthrough
    case POSTS_SET:
      if (payload) {
        return state
          .set('data', payload.data)
          .set('total', payload.total)
          .set('totalPages', payload.totalPages)
          .set('receivedAt', Date.now())
      }
    // eslint-disable-line no-fallthrough
    case POSTS_RESET:
      return initialState
    default:
      return state
  }
}
