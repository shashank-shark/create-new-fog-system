import React from 'react';
import { Component } from 'react';

import {
    Alignment,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading
} from '@blueprintjs/core';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

class App extends Component {
    render() {
        return (
          <div>
              <div>
                  <div className="container">
                      {this.props.children}
                  </div>
              </div>
          </div>
        );
    }
}

export default App;