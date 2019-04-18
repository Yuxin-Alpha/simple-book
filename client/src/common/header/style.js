import styled from 'styled-components';
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 10%;
  height: 56px;
  background: url(${logoPic}) no-repeat;
  background-size: contain;
`

export const Nav = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    color: #969696
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .slide-enter {
    width: 160px;
    transition: all .3s ease-out;
  }
  .slide-enter-active {
    width: 260px;
  }
  .slide-exit {
    transition: all .3s ease-out;
  }
  .slide-exit-active {
    width: 160px;
  }
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 9px;
  margin-left: 20px
  outline: none;
  border: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &.focused{
    width: 260px;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  cursor: pointer;
  &.reg{
    background: white;
    color: #ea6f5a;
  }
  &.article{
    background: #ea6f5a;
    color: white;
  }
`
