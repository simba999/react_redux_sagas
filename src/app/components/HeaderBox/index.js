/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import {Motion, spring, presets}  from 'react-motion';
import { Link }                   from 'react-router';
import ModalBox                   from '../ModalBox';
// import '../../../js/main.js';

class HeaderBox extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      openModalState : false,
      title          : '',
      content        : ''
    }

    this.setActive = this.setActive.bind(this);
  }

  componentWillMount() {
    this.setState({title : 'Contact'});
    // this.setState({openModalState : true});
    this.setState({content : 'Lorem ipsum dolor sit amet, ne pri hinc voluptatibus.\
                              Eu eleifend eloquentiam sea. Duis soluta mei cu.\
                               Sumo consul definitiones vis at, error soleat'});
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleWindowScroll);
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

  openContactModal() {
    this.setState({openModalState : true});
  }

  removeModal() {
    this.setState({openModalState : false});
  }

  render() {

    return (
      <nav className="navbar navbar-default navbar-fixed-top tasks" id="task">
        <div className="top_header task">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar1" 
            aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand brand-image" href="#"></a>
          </div>
          <div id="navbar1" className="navbar-collapse collapse" aria-expanded="false">
            <ul className="nav navbar-nav navbar-right white_nav task">
              <li className="dropdown">
                <a href="signup">Sign up</a>
              </li> 
              <li><a href="signin">Sign in</a></li>
            </ul>
          </div>
        </div>
        <div className="below_header task">
          <div className="navbar-header">
            <a className="navbar-brand" href="#"></a>
          </div>
          <div id="navbar" className="navbar-collapse collapse submenu" aria-expanded="false">
           
          </div>
        </div>
        <ModalBox open={this.state.openModalState} closeModal={this.removeModal.bind(this)} title={this.state.title} content={this.state.content}></ModalBox>
      </nav>
    );
  }

}

export default HeaderBox;
