import React, { Component, Fragment } from 'react';
import { Globalstyle } from './style'
import Header from './common/header'
class App extends Component {
  render() {
    return (
      <Fragment>
        <Globalstyle />
        <Header/>
      </Fragment>
    );
  }
}

export default App;
