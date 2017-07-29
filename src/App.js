import React, {Component} from 'react';
import {render} from 'react-dom';

import NavbarTop from './Navbar'

class App extends Component {
  render() {
    return (
      <div id="app">
        <NavbarTop />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
