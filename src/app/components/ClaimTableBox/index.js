/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import {Motion, spring, presets}  from 'react-motion';

class ClaimTableBox extends React.Component {

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

  render() {

    return (
      <div className="white-panel panel-margin">
        <div className="form-horizontal header_text">
          <span className="">Chart</span>
          <span className="pull-right"><i className="glyphicon glyphicon-remove"></i></span>
          <hr />
        </div>

        <div className="form-horizontal content_text">
          <table className="table table-striped table-responsive">
            <thead className="blue_header">
              <th> Incident </th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Number</th>
              <th>Statue</th>
              <th>Phase</th>
              <th>Value</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Andrey</td>
                <td>29</td>
                <td>29</td>
                <td>29</td>
                <td>29</td>
                <td>29</td>
                <td>29</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Andrey</td>
                <td>29</td>
                <td>29</td>
                <td>29</td>
                <td>29</td>
                <td>29</td>
                <td>29</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Andrey</td>
                <td>29</td>
                <td>29</td>
                <td>29</td>
                <td>29</td>
                <td>29</td>
                <td>29</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="footer_text">
          <hr />
          <span>
            <a className="active"> My claims </a><span className="blue_content">&nbsp;|&nbsp;</span> <a> All claims </a>
          </span>
          <button className="btn blue_background pull-right">Close</button>
        </div>
      </div>
    );
  }

}

export default ClaimTableBox;
