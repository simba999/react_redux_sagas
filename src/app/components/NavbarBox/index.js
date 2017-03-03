/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import {Motion, spring, presets}  from 'react-motion';
import { Link }                   from 'react-router';
import '../../../js/main.js';

class NavbarBox extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {

    }

    this.setActive = this.setActive.bind(this);
  }

  componentWillMount() {
    // window.addEventListener('scroll', this.handleWindowScroll);
    contextListener();
    clickListener();
    keyupListener();
    resizeListener();
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleWindowScroll);
  }

  setActive(el) {
    console.log("INDEX: ", el.target.parentNode.parentNode.childNodes);
    var allSiblings = el.target.parentNode.parentNode.childNodes;
    var count = 0
    while ( count < allSiblings.length) {
      console.log("TET: ", allSiblings[count].getAttribute("class"));
      if (allSiblings[count].getAttribute("class") == 'active') {
        allSiblings[count].setAttribute("class", "");
      } 
      count ++;
    }

    el.target.parentNode.setAttribute("class", "active");
  }



  render() {

    return (
      <nav className="navbar navbar-default navbar-fixed-top tasks" id="task">
        <div className="top_header task">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nabvbar" 
            aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand brand-image" href="#"></a>
          </div>
          <div id="navbar" className="navbar-collapse collapse" aria-expanded="false">
            <ul className="nav navbar-nav navbar-right white_nav task">
              <li><a>My Account</a></li> 
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="below_header  task">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nabvbar" 
            aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"></a>
          </div>
          <div id="navbar" className="navbar-collapse collapse submenu" aria-expanded="false">
            <ul className="nav navbar-nav" id="selectElement">
              <li className="active" onClick={this.setActive.bind(this)}><Link to="/">Home</Link></li>
              <li onClick={this.setActive.bind(this)}><Link to="opencase">Open Claims</Link></li>
              <li onClick={this.setActive.bind(this)}><Link>Closed Claims</Link></li>
              <li onClick={this.setActive.bind(this)}><Link>Reports</Link></li>
            </ul>
          </div>
        </div>
        <nav id="context-menu" className="context-menu">
          <ul className="context-menu__items">
            <li className="context-menu__item">
              <a href="#" className="context-menu__link" data-action="View"><i className="fa fa-eye"></i> View Task</a>
            </li>
            <li className="context-menu__item">
              <a href="#" className="context-menu__link" data-action="Edit"><i className="fa fa-edit"></i> Edit Task</a>
            </li>
            <li className="context-menu__item">
              <a href="#" className="context-menu__link" data-action="Delete"><i className="fa fa-times"></i> Delete Task</a>
            </li>
          </ul>
        </nav>
      </nav>
    );
  }

}

export default NavbarBox;
