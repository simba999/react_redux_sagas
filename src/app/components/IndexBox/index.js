/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import {Motion, spring, presets}  from 'react-motion';

class IndexBox extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {

    }
  }

  componentWillMount() {
    // window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleWindowScroll);
  }

  gotoOpenClaim() {
    window.location = '/opencase';
  }

  render() {

    return (
      <div className="white-panel panel-margin">
        <div className="form-horizontal header_text">
          <span className="">Claim Index</span>
          <span className="pull-right"><i className="glyphicon glyphicon-remove" onClick={this.gotoOpenClaim.bind(this)}></i></span>
          <hr />
        </div>

        <div className="form-horizontal content_text">
          <div className="col-sm-3">
            <div className="form-horizontal blue_header_text">
              <span className="blue_color">Claim Info</span>
              <hr />
            </div>
            <div className="yellow_squre_text_decoration">
              <ul>
                <li><a>Claim info</a></li>
                <li><a>Injured-party</a></li>
                <li><a>Police Report</a></li>
                <li><a>At-fault Party</a></li>
                <li><a>Correspondence</a></li>
                <li><a>Claim Expenses</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-horizontal">
              <a className="blue_color" href="user">Personal Info</a>
              <hr />
            </div>
            <div className="yellow_squre_text_decoration">
              <ul>
                <li><a>Personal History</a></li>
                <li><a>Marriage History</a></li>
                <li><a>Medical History</a></li>
                <li><a>Financial Party</a></li>
                <li><a>Driving History</a></li>
                <li><a>Criminal History</a></li>
                <li><a>Judgements History</a></li>
                <li><a>Social Media</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-horizontal">
              <span className="blue_color">Incidental Info</span>
              <hr />
            </div>
            <div className="yellow_squre_text_decoration">
              <ul>
                <li><a>Description</a></li>
                <li><a>Conditions</a></li>
                <li><a>Circumstances</a></li>
                <li><a>Timeline</a></li>
                <li><a>Investigations</a></li>
                <li><a>Conversations</a></li>
                <li><a>Property Damages</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-horizontal">
              <span className="blue_color">Injury Info</span>
              <hr />
            </div>
            <div className="yellow_squre_text_decoration">
              <ul>
                <li><a>Injuries</a></li>
                <li><a>Effects of Injuries</a></li>
                <li><a>Journal</a></li>
                <li><a>Appointments</a></li>
                <li><a>Out-of-pocket Expenses</a></li>
                <li><a>Demand Package</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

IndexBox.propTypes = {
  title       : React.PropTypes.string,
  content     : React.PropTypes.string
}

export default IndexBox;
