import React, { Component, Fragment } from 'react';
import { Globalstyle } from './style'
import { Provider } from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import { IconFont } from './static/iconfont/iconfont'
import Home from './pages/home'
import Detail from './pages/detail'
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
          <BrowserRouter>
            <Route path='/' exact component={Home}/>
            <Route path='/detail' exact component={Detail}/>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
