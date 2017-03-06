/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import {Motion, spring, presets}  from 'react-motion';
import Modal                      from 'react-bootstrap-modal'

class Step3Box extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      open : false,
    }

  }

  componentWillMount() {
    // this.setState({open : false});
    // this.setState({open: this.props.open});
  }

  componentWillUnmount() {
  }

  

  render() {

    return (
      <Modal
        show={this.props.open}
        className="dev"
        onHide={this.props.closeModal}
        aria-labelledby="ModalHeader">

        <Modal.Body>
          <div className="header_text" >
            <span className="">{this.props.title}</span>
            <span className="pull-right" onClick={this.props.closeModal}><i className="glyphicon glyphicon-remove"></i></span>
            <hr />
          </div>
          <div className="content_text">
            <div className="form-horizontal content_text table-responsive">
          <table className="table table-striped">
            <thead className="blue_header">
              <tr>
                <th> step3 </th>
              </tr> 
            </thead>
            <tbody>
              <tr>
              </tr>
            </tbody>
          </table>
        </div>
          </div>
			
          <div className="footer_text flex">
			      <hr />
            <button href="#" className="btn grey_background pull-left" style={{margin: '0 0 0 1%'}} 
              onClick={this.props.prevOpen}>&#10092; Prev</button>
              <div className="progress_content">
                <div style={{display: 'inline-block', margin: '0 0 0 2%'}}>0%</div>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="50"
                  aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}>
                  60%
                  </div>
                </div>
                <div style={{display: 'inline-block'}}>100%</div>
              </div>

            <button href="#" className="btn blue_background pull-right" style={{margin: '0 1% 0 0'}} 
              onClick={this.props.nextOpen}>Next &#10093;</button>  
              <div className="center_text">03 of 05</div>            
          </div>
          
        </Modal.Body>
      </Modal>
    );
  }

}

Step3Box.propTypes = {
  open            : React.PropTypes.bool.isRequired,
  closeModal      : React.PropTypes.func,
  title           : React.PropTypes.string.isRequired,
  prevOpen        : React.PropTypes.func,
  nextOpen        : React.PropTypes.func
};

export default Step3Box;
