/* global $:true */

import React, {
  Component,
  PropTypes
}                       from 'react';
import {Motion, spring, presets} from 'react-motion';

class RightSideBox extends React.Component {

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

  alertMessage() {
    console.log("About pressed");
  }

  render() {

    return (
      <div className="white-panel">
        <div className="right_header_text">
          <button className="btn btn-warning">Open New Matter</button>          
        </div>
        
        <div className="text_align_center">
          <a className="padding_left" href="#" onClick={this.alertMessage.bind(this)}>about</a>
        </div>
        
        <div className="content_text"></div>
      </div>
    );
  }

}

export default RightSideBox;
