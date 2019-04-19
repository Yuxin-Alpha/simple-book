import React, { Component, Fragment } from 'react';
import { Globalstyle } from './style'
import { Provider } from 'react-redux'
import { IconFont } from './static/iconfont/iconfont'
import Header from './common/header'
import store from './store'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <Globalstyle />
          <IconFont />
          <Header/>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
