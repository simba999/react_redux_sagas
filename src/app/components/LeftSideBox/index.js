/* global $:true */

import React, {
  Component,
  PropTypes
}                                     from 'react';
import {Motion, spring, presets}      from 'react-motion';
import ModalBox                       from '../../components/ModalBox';
import { Link }                       from 'react-router';

class LeftSideBox extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      openModalState : false,
      title          : '',
      content        : ''
    }
  }

  componentWillMount() {
    this.setState({title : "About"});
    this.setState({content : 
      "Lorem ipsum dolor sit amet, ne pri hinc voluptatibus.\
       Eu eleifend eloquentiam sea. Duis soluta mei cu.\
        Sumo consul definitiones vis at, error soleat"});
  }

  componentWillUnmount() {

  }

  openModal() {
    this.setState({openModalState : true});
  }

  removeModal() {
    this.setState({openModalState : false});
  }

  render() {

    return (
      <div className="white-panel panel-margin">
        <div className="header_text">
          <span className="">Personal Info</span>
          <hr />
          <span className="pull-right"><a href="#">index</a></span>          
        </div>
        <div className="content_text">
          <div className="menu_text"><span href="#" className="active">Personal Info</span></div>
          <ul className="submenu_text">
            <li><Link to="/user/adoption">Adoption</Link></li>
            <li><Link to="/user/aliases">Aliases</Link></li>
            <li><Link to="/user/activities">Activities</Link></li>
            <li><Link to="/user/awards">Awards</Link></li>
            <li><Link to="/user/affliations">Affiliations</Link></li>
            <li><Link to="/user/familiy_history">Familiy history</Link></li>
            <li><Link to="/user/education_history">Education history</Link></li>
            <li><Link to="/user/employment_history">Employment history</Link></li>
            <li><Link to="/user/residental">Residental history</Link></li>
            <li><Link to="/user/military_history">Military services</Link></li>
          </ul>
        </div>
        <ModalBox open={this.state.openModalState} closeModal={this.removeModal.bind(this)} title={this.state.title} content={this.state.content}></ModalBox>        
      </div>
    );
  }

}

export default LeftSideBox;
