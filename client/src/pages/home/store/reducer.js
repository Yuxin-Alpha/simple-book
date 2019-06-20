// import { SEARCH_BlUE, SEARCH_FOCUS, CHANGE_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE} from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/users/upload_avatars/7416466/fc1a1a0d-e3c7-4bca-9720-028c5c9914f3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }, {
    id: 2,
    title: '手绘',
    imgUrl: '//upload.jianshu.io/users/upload_avatars/7416466/fc1a1a0d-e3c7-4bca-9720-028c5c9914f3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }, {
    id: 3,
    title: '教育咨询',
    imgUrl: '//upload.jianshu.io/users/upload_avatars/7416466/fc1a1a0d-e3c7-4bca-9720-028c5c9914f3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }, {
    id: 4,
    title: '娱乐新闻',
    imgUrl: '//upload.jianshu.io/users/upload_avatars/7416466/fc1a1a0d-e3c7-4bca-9720-028c5c9914f3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}
