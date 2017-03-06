/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import {Motion, spring, presets}  from 'react-motion';
import Modal                   from 'react-bootstrap-modal'

class Step1Box extends React.Component {

  constructor(props, context) {
    super(props, context);

  }

  componentWillMount() {
    // this.setState({open : false});
  }

  componentWillUnmount() {
  }

  closeModal() {
    this.setState({open: false;})
  }

  render() {

    return (
      <Modal
        show={this.props.open}
        onHide={this.closeModal.bind(this)}
        aria-labelledby="ModalHeader">

        <Modal.Body>
          <div className="header_text" >
            <span className="">{this.props.title}</span>
            <span className="pull-right" onClick={this.closeModal.bind(this)}><i className="glyphicon glyphicon-remove"></i></span>
            <hr />
          </div>
          <div className="content_text">
            <div className="form-horizontal content_text table-responsive">
          <table className="table table-striped">
            <thead className="blue_header">
              <tr>
                <th> step1 </th>
              </tr> 
            </thead>
            <tbody>
              <tr>
              </tr>
            </tbody>
          </table>
        </div>
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

Step1Box.propTypes = {
  open            : React.PropTypes.bool.isRequired,
  title           : React.PropTypes.string.isRequired,
  content         : React.PropTypes.string.isRequired
};

export default Step1Box;
