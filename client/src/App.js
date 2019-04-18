import React, { Component, Fragment } from 'react';
import { Globalstyle } from './style'
import { IconFont } from './static/iconfont/iconfont'
import Header from './common/header'
class App extends Component {
  render() {
    return (
      <Fragment>
        <Globalstyle />
        <IconFont />
        <Header/>
      </Fragment>
    );
  }
}

export default App;
