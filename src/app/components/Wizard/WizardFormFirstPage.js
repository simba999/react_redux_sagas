/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import {Motion, spring, presets}  from 'react-motion';

class WizardFormFirstPage extends React.Component {

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

  gotoHome() {
    window.location = '/';
  }

  render() {

    return (
      <form className="modal-dialog ProgressStepBox">
        <div className="header_text">
          <span>Open New Matter</span>
          <span className="pull-right"><label className="remove_icon1 padding_inner_box" onClick={this.gotoHome.bind(this)}></label></span>
          <hr />
        </div>
        <div className="content_text" id="wizard_content">
          <table className="table table-responsive">
            <thead>
              <tr>
                <th style={{'paddingLeft': '20px'}}>Step1</th>
                <th><a className="pull-right" style={{'cursor': 'pointer', 'paddingRight': '20px', 'color': '#ffffff'}}> about </a></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div className="footer_text wizard_form row">
          <hr />
          <div className="col-sm-2 prev_button center_text"><button href="#" className="btn grey_background" onClick={this.gotoHome.bind(this)}>&#10092; Prev</button></div>
          <div className="col-sm-8 progress_content">
            <div className="center_text" id="progress_box">
              <div className="progress_from_to">0%</div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="20"
                aria-valuemin="0" aria-valuemax="100" style={{width:'20%'}}>
                20%
                </div>
              </div>
              <div className="progress_from_to">100%</div>
            </div>
            <div className="center_text">01 of 05</div>
          </div>
          
          <div className="col-sm-2 next_button center_text"><button href="#" type="type" className="next btn blue_background" onClick={this.props.nextPage}>Next &#10093;</button></div>
                
        </div>
      </form>
    );
  }

}

WizardFormFirstPage.propTypes = {
  previousPage  : React.PropTypes.func,
  nextPage      : React.PropTypes.func
}

export default WizardFormFirstPage;
