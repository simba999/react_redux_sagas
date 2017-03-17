/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import {Motion, spring, presets}  from 'react-motion';

class WizardFormFifthPage extends React.Component {

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

  gotoOpenCliam() {
    window.location = '/opencase';
  }

  render() {

    return (
      <form className="modal-dialog ProgressStepBox">
        <div className="header_text">
          <span>Step5</span>
          <span className="pull-right"><label className="remove_icon1 padding_inner_box" onClick={this.gotoHome.bind(this)}></label></span>
          <hr />
        </div>
        <div className="content_text">
          <table className="table table-responsive">
            <thead>
              <tr>
                <th style={{'paddingLeft': '20px'}}>Step5</th>
                <th><a className="pull-right" style={{'cursor': 'pointer', 'paddingRight': '20px', 'color': '#ffffff'}}> about </a></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div className="footer_text wizard_form">
          <hr />
          <div className="col-sm-1 prev_button"><button href="#" className="btn grey_background" onClick={this.props.previousPage}>&#10092; Prev</button></div>
          <div className="progress_content col-sm-10">
            <div className="center_text">
              <div style={{display: 'inline-block', margin: '0 0 0 2%'}}>0%</div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="20"
                aria-valuemin="0" aria-valuemax="100" style={{width:'100%'}}>
                100%
                </div>
              </div>
              <div style={{display: 'inline-block'}}>100%</div>
            </div>
            <div className="center_text">05 of 05</div>
          </div>

          <div className="col-sm-1 next_button"><button href="#" type="button" className="next btn blue_background" onClick={this.gotoOpenCliam.bind(this)}>Next &#10093;</button></div>
                
        </div>
      </form>
    );
  }

}

WizardFormFifthPage.propTypes = {
  previousPage  : React.PropTypes.func,
  nextPage      : React.PropTypes.func
}

export default WizardFormFifthPage;
