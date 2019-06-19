import { SEARCH_BlUE, SEARCH_FOCUS, CHANGE_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE} from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      return state.set('focused', true);
    case SEARCH_BlUE:
      return state.set('focused', false);
    case CHANGE_LIST:
      return state.set('list', action.data).set('totalPage', action.totalPage);
    case MOUSE_ENTER:
      return state.set('mouseIn', true);
    case MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
}
