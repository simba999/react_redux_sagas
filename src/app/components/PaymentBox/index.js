/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import {Motion, spring, presets}  from 'react-motion';
import ModalBox                   from '../../components/ModalBox';

class PaymentBox extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      openPaymentState      : false,
      titlePayment          : '',
      contentPayment        : '',
      openAccountState      : false,
      titleAccount          : '',
      contentAccount        : '',
      openPriceState        : false,
      titlePrice            : '',
      contentPrice          : ''
    }
  }

  componentWillMount() {
    this.setState({titlePayment   : "Payment method"});
    this.setState({titleAccount   : "Closed account"});
    this.setState({titlePrice     : "Price grid"});

    this.setState({contentPayment : ""});
    this.setState({contentAccount : ""});
    this.setState({contentPrice   : ""});
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleWindowScroll);
  }

  openPaymentModal() {
    this.setState({openPaymentState : true});
  }

  openAccountModal() {
    this.setState({openAccountState : true});
  }

  openPriceModal() {
    this.setState({openPriceState : true});
  }

  removeModal() {
    this.setState({openPaymentState : false});
    this.setState({openAccountState : false});
    this.setState({openPriceState : false});
  }

  gotoHome() {
    window.location = '/';
  }

  render() {

    return (
      <div className="white-panel panel-margin">
        <div className="form-horizontal header_text">
          <span className="">Payment</span>
          <hr />
        </div>

        <div className="form-horizontal content_text table-responsive">
          <div className="blue_color " style={{padding: '0 0 10px 0'}}>
            <div className="col-sm-6">
              <ul>
                <li><a onClick={this.openPriceModal.bind(this)}>Payment Method</a></li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul>
                <li><a onClick={this.openAccountModal.bind(this)}>Close Account</a></li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul>
                  <li><a onClick={this.openPriceModal.bind(this)}>Price Grid</a></li>
              </ul>
            </div>
          </div>
          
          <table className="table table-striped">
            <thead className="blue_header">
              <tr>
                <th>Claim</th>
                <th>Date</th>
                <th>Name</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Card</th>
                <th>Total</th>
              </tr> 
            </thead>
            <tbody>
              <tr>
                
              </tr>
              
            </tbody>
          </table>
        </div>
        <div className="footer_text">
          <hr />
          <span>
            <a className="active"> My claims </a><span className="blue_content">&nbsp;|&nbsp;</span> <a> All claims </a>
          </span>
          <button className="btn blue_background pull-right" onClick={this.gotoHome.bind(this)}>Close</button>
        </div>
        <ModalBox open={this.state.openPaymentState} closeModal={this.removeModal.bind(this)} title={this.state.titlePayment} content={this.state.contentPayment}></ModalBox>
        <ModalBox open={this.state.openAccountState} closeModal={this.removeModal.bind(this)} title={this.state.titleAccount} content={this.state.contentAccount}></ModalBox>
        <ModalBox open={this.state.openPriceState} closeModal={this.removeModal.bind(this)} title={this.state.titlePrice} content={this.state.contentPrice}></ModalBox>
      </div>
    );
  }

}

export default PaymentBox;
