import { SEARCH_BlUE, SEARCH_FOCUS, CHANGE_LIST} from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  list: []
})
export default (state = defaultState, action) => {
  if (action.type === SEARCH_FOCUS) {
    return state.set('focused', true)
  }
  if (action.type === SEARCH_BlUE) {
    return state.set('focused', false)
  }
  if (action.type === CHANGE_LIST) {
    return state.set('list', action.data)
  }
  return state
}
