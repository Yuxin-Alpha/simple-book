import { SEARCH_BlUE, SEARCH_FOCUS, CHANGE_LIST } from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

export const searchFocus = () => ({
  type: SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: SEARCH_BlUE
})

export const changeList = (data) => ({
  type: CHANGE_LIST,
  data: fromJS(data)
})

export const getSearchList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
      const data = res.data
      dispatch(changeList(data.data))
    }).catch(err => {})
  }
}
