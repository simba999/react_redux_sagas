/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import {browserHistory, Link}     from 'react-router';
import {Motion, spring, presets}  from 'react-motion';
import ModalBox                   from '../../components/ModalBox';
import $                          from 'jquery';

class ClaimTableBox extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      openModalState : false,
      title          : '',
      content        : ''
    }

    this.linkIndex = this.linkIndex.bind(this);
  }

  componentWillMount() {
    this.setState({title : "About"});
    this.setState({content : 
      "Lorem ipsum dolor sit amet, ne pri hinc voluptatibus.\
       Eu eleifend eloquentiam sea. Duis soluta mei cu.\
        Sumo consul definitiones vis at, error soleat"});
  }

  componentWillUnmount() {
    this.linkIndex;
  }

  linkIndex() {
    browserHistory.push('index');
  }

  openModal() {
    this.setState({openModalState : true});
  }

  removeModal() {
    this.setState({openModalState : false});
  }

  gotoHome() {
    browserHistory.push('dashboard');
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
          <span className="">Open Claims</span>
          
          <span className="pull-right remove_group">
            <label className="remove_icon" onClick={this.gotoHome.bind(this)}></label>
          </span>
          <a href="#" className="padding-div-right about_link pull-right" onClick={this.openModal.bind(this)}>About</a>
          <hr />
        </div>

        <div className="form-horizontal content_text table-responsive">
          <table className="table table-striped">
            <thead className="blue_header">
              <tr>
                <th> Incident </th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Number</th>
                <th>Statue</th>
                <th>Phase</th>
                <th>Value</th>
              </tr> 
            </thead>
            <tbody>
              <tr onClick={this.linkIndex}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr onClick={this.linkIndex}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr onClick={this.linkIndex}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          
        </div>
        
        <div className="footer_text payment_page">
          <hr />
          <ul className="inline-list col-sm-8">
            <li className="active"><a onClick={this.setActive.bind(this)}> My claims </a></li>
            <li className="" style={{color: '#66cfff'}}>&nbsp;|&nbsp;</li> 
            <li><a href="#" onClick={this.setActive.bind(this)}> All claims </a></li>
          </ul>
          <a className="btn close_button pull-right col-sm-4" onClick={this.gotoHome.bind(this)}>Close</a>
        </div>
        <ModalBox open={this.state.openModalState} closeModal={this.removeModal.bind(this)} title={this.state.title} content={this.state.content}></ModalBox>
      </div>
    );
  }

}

export default ClaimTableBox;
