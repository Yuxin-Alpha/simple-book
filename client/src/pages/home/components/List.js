import React, { Component } from 'react'
import { ListItem, ListInfo } from '../style'
class List extends Component {
  render() {
    return (
      <ListItem>
        <img className='list-pic' src="//upload-images.jianshu.io/upload_images/5856332-e59e2e77415aa2be.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
        <ListInfo>
          <h3 className="title">张嘉倪告诉女生，男生真心喜欢你，会有这四种表现</h3>
          <p className="desc">我的故事里，有你的身影。 1 这两天被张嘉倪与买超的爱情故事刷屏了，张嘉倪非常漂亮，买超的能追到张嘉倪，靠的不是颜值，而是一颗炙热的真心。他们的...</p>
        </ListInfo>
      </ListItem>
    )
  }
}

export default List
