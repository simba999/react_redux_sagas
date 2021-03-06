/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import {Motion, spring, presets}  from 'react-motion';
import { Link }                   from 'react-router';
import ModalBox                   from '../ModalBox';
import { connect }                from 'react-redux';
import * as viewsActions          from '../../redux/modules/views';
// import '../../../js/main.js';

class NavbarBox extends React.Component {

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

  componentDidMount() {

  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleWindowScroll);
  }

  setActive(el) {
    var allSiblings = el.target.parentNode.parentNode.childNodes;
    console.log("LIDN: ", el.target.parentNode.parentNode.childNodes);
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
              <li className="dropdown" style={{'paddingRight': '1.5em'}}>
                <a href="#" className="dropdown-toggle heading_link" data-toggle="dropdown">My Account</a>
                <ul className="dropdown-menu">
                  <li><Link to="/profile">Profile</Link></li>
                  <li><Link to="/password">Password</Link></li>
                  <li><Link to="/payment">Payment</Link></li>
                  <li><Link to="/users">Users</Link></li>
                  <li><Link to="">Sign out</Link></li>
                </ul>
              </li>
              <li style={{'color':'#ffffff'}} className="seperate_line">&nbsp; | &nbsp;</li> 
              <li style={{'paddingLeft': '1.5em'}}><a href="#" className="dropdown-toggle heading_link" onClick={this.openContactModal.bind(this)}>Contact</a></li>
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
              <li className="active"><Link to="dashboard" id="navbar_home" onClick={this.setActive.bind(this)} >Home</Link></li>
              <li><Link to="opencase" id="navbar_opencase" onClick={this.setActive.bind(this)}>Open Claims</Link></li>
              <li><Link to="closeclaim" id="navbar_closeclaim" onClick={this.setActive.bind(this)}>Closed Claims</Link></li>
              <li><Link to="reports" id="navbar_reports" onClick={this.setActive.bind(this)}>Reports</Link></li>
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
        <ModalBox open={this.state.openModalState} closeModal={this.removeModal.bind(this)} title={this.state.title} content={this.state.content}></ModalBox>
      </nav>
    );
  }

}

// export default NavbarBox;

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(
//     {
//       enterHome: viewsActions.enterHome,
//       leaveHome: viewsActions.leaveHome,
//       clickMenu: viewsActions.clickMenu
//     },
//     dispatch
//   );
// };

/*
  without bindActionCreators:
 */
const mapDispatchToProps = (dispatch) => {
  return {
    enterHome: () => dispatch(viewsActions.enterHome()),
    leaveHome: () => dispatch(viewsActions.leaveHome()),
    clickMenu: () => dispatch(viewsActions.clickMenu())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarBox);
