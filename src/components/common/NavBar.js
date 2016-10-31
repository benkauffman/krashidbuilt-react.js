'use strict';

import React from 'react';
import { Link } from 'react-router';
import content from '../../data/content';

export default class Layout extends React.Component {
  render() {
    return (
      <nav className="pages-menu">
        {content.map(menuPage => {
          return <Link key={menuPage.id} to={`/${menuPage.id}`} activeClassName="active">
            {menuPage.name}
          </Link>;
        })}
      </nav>
    );
  }
}
