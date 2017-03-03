/* global $:true */

import React, {
  Component,
  PropTypes
}                                     from 'react';
import {Motion, spring, presets}      from 'react-motion';
import ModalBox                       from '../../components/ModalBox';

class RightSideBox extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      openModalState : false
    }
  }

  componentWillMount() {
    // window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleWindowScroll);
  }

  openModal() {
    this.setState({openModalState : true});
  }

  removeModal() {
    this.setState({openModalState : false});
  }

  render() {

    return (
      <div className="white-panel">
        <div className="right_header_text">
          <button className="btn btn-warning">Open New Matter</button>          
        </div>
        
        <div className="text_align_center">
          <a className="padding_left" href="#" onClick={this.openModal.bind(this)}>about</a>
        </div>
        
        <div className="content_text"></div>
        <ModalBox open={this.state.openModalState} closeModal={this.removeModal.bind(this)}></ModalBox>        
      </div>
    );
  }

}

export default RightSideBox;
