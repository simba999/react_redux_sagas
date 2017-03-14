/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import {Motion, spring, presets}  from 'react-motion';
import Modal                   from 'react-bootstrap-modal'

class ModalBox extends React.Component {

  constructor(props, context) {
    super(props, context);

  }

  componentWillMount() {
    // this.setState({open : false});
  }

  componentWillUnmount() {
  }

  render() {

    return (
      <Modal
        show={this.props.open}
        onHide={this.props.closeModal}
        aria-labelledby="ModalHeader">

        <Modal.Body>
          <div className="header_text" >
            <span className="">{this.props.title}</span>
            <span className="pull-right remove_group" onClick={this.props.closeModal}><label className="remove_icon"></label></span>
            <hr />
          </div>
          <div className="content_text">
            {this.props.content}
          </div>
			
          <div className="footer_text">
			      <hr />
            <Modal.Dismiss className='btn blue_background pull-right'>Close</Modal.Dismiss>  
          </div>
          
        </Modal.Body>
      </Modal>
    );
  }

}

ModalBox.propTypes = {
  open            : React.PropTypes.bool.isRequired,
  closeModal      : React.PropTypes.func.isRequired,
  title           : React.PropTypes.string.isRequired,
  content         : React.PropTypes.string.isRequired
};

export default ModalBox;
