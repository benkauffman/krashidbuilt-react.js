'use strict';

import React from 'react';
import { Link } from 'react-router';
import Header from './common/Header';
import Footer from './common/Footer';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header/>
          <div className="app-content">{this.props.children}</div>
        <Footer/>
      </div>
    );
  }
}
