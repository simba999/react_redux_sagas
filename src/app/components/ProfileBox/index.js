/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import {Motion, spring, presets}  from 'react-motion';
import $                          from 'jquery';
//import Accordion                  from 'react-accordion-component';
import CustomAccordion            from '../Accordion/index';

class ProfileBox extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {

    }

  }

  componentWillMount() {
    // window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleWindowScroll);
  }

  gotoHome() {
    window.location = 'home';
  }

  setActive(el) {
    var allSiblings = el.target.parentNode.parentNode.childNodes;
    var count = 0
    while ( count < allSiblings.length) {
      if (allSiblings[count].getAttribute("class") == 'active') {
        allSiblings[count].setAttribute("class", "");
      } 
      count ++;
    }

    el.target.parentNode.setAttribute("class", "active");
  }
  
  render() {

    return (
      <div className="white-panel panel-margin">
        <div className="form-horizontal header_text">
          <span className="">{this.props.title}</span>
          <span className="pull-right"><label className="remove_icon padding_inner_box" onClick={this.gotoHome.bind(this)}></label></span>
          <hr />
        </div>

        <div className="form-horizontal content_text">
          <span>{this.props.content}</span>
          <div>SDFSDFDS</div>
        </div>
        <div className="footer_text payment_page">
        </div>
      </div>
    );
  }

}

ProfileBox.propTypes = {
  title       : React.PropTypes.string.isRequired,
  content     : React.PropTypes.string
}

export default ProfileBox;
