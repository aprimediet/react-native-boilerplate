import { TOGGLE_DARK_MODE } from '@constants/ActionTypes'
import { fromJS } from 'immutable'

export const initialState = fromJS({
  darkMode: false,
})

export default (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case TOGGLE_DARK_MODE:
      return state.set('darkMode', !state.get('darkMode'))
    default:
      return state
  }
}
