import { SEARCH_BlUE, SEARCH_FOCUS, CHANGE_LIST} from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  list: []
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      return state.set('focused', true);
    case SEARCH_BlUE:
      return state.set('focused', false);
    case CHANGE_LIST:
      return state.set('list', action.data);
    default:
      return state;
  }
}
