/* global $:true */

import React, {
  Component,
  PropTypes
}                                             from 'react';
import {Motion, spring, presets}              from 'react-motion';
import { Link, BrowserHistory }               from 'react-router';
import ModalBox                               from '../ModalBox';

class NavbarBox1 extends React.Component {

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
    this.setState({content : 'Lorem ipsum dolor sit amet, ne pri hinc voluptatibus.\
                              Eu eleifend eloquentiam sea. Duis soluta mei cu.\
                               Sumo consul definitiones vis at, error soleat'});
  }

  componentWillUnmount() {
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
              <li className="dropdown" style={{'paddingRight': '20px'}}>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" s>My Account</a>
                <ul className="dropdown-menu">
                  <li><Link to="profile">Profile</Link></li>
                  <li><Link to="password">Password</Link></li>
                  <li><Link to="payment">Payment</Link></li>
                  <li><Link to="users">Users</Link></li>
                  <li><Link to="#">Sign out</Link></li>
                </ul>
              </li> 
              <li style={{'paddingTop': '10px', 'color':'#ffffff'}}>&nbsp; | &nbsp;</li> 
              <li style={{'paddingLeft': '20px'}}><a onClick={this.openContactModal.bind(this)} style={{'font-size': '15px'}}>Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="below_header task">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" 
            aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"></a>
          </div>
          <div id="navbar" className="navbar-collapse collapse submenu" aria-expanded="false">
            <ul className="nav navbar-nav" id="selectElement">
              <li className="active" onClick={this.setActive.bind(this)}><Link to="/user">Info</Link></li>
              <li onClick={this.setActive.bind(this)}><Link to="/agreement">Agreements</Link></li>
              <li onClick={this.setActive.bind(this)}><Link to="/research">Research</Link></li>
              <li onClick={this.setActive.bind(this)}><Link to="/review">Review</Link></li>
              <li onClick={this.setActive.bind(this)}><Link to="/claimreport">Reports</Link></li>
            </ul>
            <div className="pull-right username_text">Doe, John P</div>
          </div>
        </div>
        <nav id="context-menu" className="context-menu">
          <ul className="context-menu__items">
            <li className="context-menu__item">
              <Link to="" className="context-menu__link" data-action="View"><i className="fa fa-eye"></i> View Task</Link>
            </li>
            <li className="context-menu__item">
              <Link to="" className="context-menu__link" data-action="Edit"><i className="fa fa-edit"></i> Edit Task</Link>
            </li>
            <li className="context-menu__item">
              <Link to="" className="context-menu__link" data-action="Delete"><i className="fa fa-times"></i> Delete Task</Link>
            </li>
          </ul>
        </nav>
        <ModalBox open={this.state.openModalState} closeModal={this.removeModal.bind(this)} title={this.state.title} content={this.state.content}></ModalBox>
      </nav>
    );
  }

}

export default NavbarBox1;
