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

    this.state = {
      // open       : false,

    }

    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    // this.setState({open : false});
  }

  componentWillUnmount() {
  }

  closeModal() {
      // this.setState({open: true});
    }

  render() {

    return (
      <Modal
        show={this.props.open}
     
        aria-labelledby="ModalHeader">

        <Modal.Header closeButton>
          <Modal.Title id='ModalHeader'>
            <div>Header</div>
          <hr />
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="">
            <div className="">
              Your invitation code is in-correct or in-valid. If you don’t have an invitation code, or need an updated code please <a> contact </a> us so we can provide you with one.
            </div>
            <div className="">
              <Modal.Dismiss className='btn btn-primary'>Close</Modal.Dismiss>  
            </div>
          </div>
          
        </Modal.Body>
      </Modal>
    );
  }

}

ModalBox.propTypes = {
  open          : React.PropTypes.bool.required,
  closeModal    : React.PropTypes.func
};

export default ModalBox;
