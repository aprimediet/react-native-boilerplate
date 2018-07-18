import { SESSION_SET, SESSION_RESET } from '@/constants/ActionTypes'
import { fromJS } from 'immutable'

const initialState = fromJS({
  authenticated: false,
  token: null,
  user: null,
  updatedAt: null,
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SESSION_SET:
      return state
        .set('authenticated', true)
        .set('token', payload.token)
        .set('user', payload.user)
        .set('updatedAt', Date.now())
    case SESSION_RESET:
      return initialState
    default:
      return state
  }
}
