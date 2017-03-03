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
            <span className="">Notice</span>
            <span className="pull-right" onClick={this.props.closeModal}><i className="glyphicon glyphicon-remove"></i></span>
            <hr />
          </div>
          <div className="content_text">
            Your invitation code is in-correct or in-valid. If you don’t have an invitation code, or need an updated code please <a> contact </a> us so we can provide you with one.
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
  closeModal      : React.PropTypes.func.isRequired
};

export default ModalBox;
