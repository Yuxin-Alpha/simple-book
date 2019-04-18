import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from "./style";

class Header extends  Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">Aa</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavSearch ></NavSearch>
          <Addition>
            <Button className="article">写文章</Button>
            <Button className="reg">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}
export default Header;
