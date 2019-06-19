import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  HeaderWrapper,
  Logo, Nav, NavItem,
  NavSearch, Addition,
  Button, SearchWrapper, SearchInfo,
  SearchInfoTitle, SearchInfoSwitch,
  SearchInfoItem
} from "./style";
import { CSSTransition } from 'react-transition-group'
import {searchBlur, searchFocus, getSearchList } from './store/actionCreators'

class Header extends Component {
  getListArea () {
    let {focused, list} = this.props
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          {
            list.map((item) => {
              return (<SearchInfoItem key={item}>{item}</SearchInfoItem>)
            })
          }
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const {focused, handleInputFocus, handleInputBlur} = this.props
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <NavItem className="right">登录</NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={300}
              in={focused}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              >
              </NavSearch>

            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe62d;</i>
            {this.getListArea()}
          </SearchWrapper>

          <Addition>
            <Button className="article">
              <i className="iconfont">&#xe616;</i>写文章
            </Button>
            <Button className="reg">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(getSearchList())
      dispatch(searchFocus())
    },
    handleInputBlur() {
      dispatch(searchBlur())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
