'use strict';

import React from 'react';
import { Link } from 'react-router';
import NavBar from './NavBar';
export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">
            <img className="logo" src="/img/Logo.jpg"/>
          </Link>
        </header>
        <NavBar/>
      </div>
    );
  }
}
