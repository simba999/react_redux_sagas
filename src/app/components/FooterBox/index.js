/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import {Motion, spring, presets}  from 'react-motion';

class FooterBox extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {

    }
  }

  componentWillMount() {
    // window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleWindowScroll);
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <legend></legend>
              <p>© Copyright 2013 - 2014. NoxCraft Network. All Rights Reserved. <span className="pull-right"><a href="#">Privacy</a> | <a href="#">ToS</a> | <a href="#">Contact</a></span></p>
        </div>
      </div>
    );
  }

}

export default FooterBox;
