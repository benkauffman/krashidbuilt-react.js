'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import content from '../data/content';

export default class SitePage extends React.Component {
  render() {
    const id = this.props.params.id;
    const page = content.filter((page) => page.id === id)[0];
    if (!page) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${page.cover})` };
    return (
      <div className="page-full">
        <div className="page">
          <header style={headerStyle}/>
          <div>

              <div className="content" dangerouslySetInnerHTML={{__html: page.text}}></div>

          </div>
        </div>
        <div className="navigateBack">
          <Link to="/">BACK HOME</Link>
        </div>
      </div>
    );
  }
}
