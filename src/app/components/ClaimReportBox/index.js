/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import {Motion, spring, presets}  from 'react-motion';
import ModalBox                   from '../../components/ModalBox';

class ClaimReportBox extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      openModalState : false,
      title          : '',
      content        : ''
    }
  }

  componentWillMount() {
    this.setState({title : "About"});
    this.setState({content : 
      "Lorem ipsum dolor sit amet, ne pri hinc voluptatibus.\
       Eu eleifend eloquentiam sea. Duis soluta mei cu.\
        Sumo consul definitiones vis at, error soleat"});
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleWindowScroll);
  }

  openModal() {
    this.setState({openModalState : true});
  }

  removeModal() {
    this.setState({openModalState : false});
  }

  gotoHome() {
    window.location = "/index";
  }

  render() {

    return (
      <div className="white-panel panel-margin">
        <div className="form-horizontal header_text">
          <span className="">Reports</span>
          <span className="pull-right"><a href="#" className="padding-div-right" onClick={this.openModal.bind(this)}>About</a><i className="glyphicon glyphicon-remove"></i></span>
          <hr />
        </div>

        <div className="form-horizontal content_text table-responsive">
          <table className="table table-striped">
            <thead className="blue_header">
              <tr>
                <th>Report</th>
                <th>Description</th>   
              </tr> 
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
        </div>
        <div className="footer_text">
          <hr />
          <button className="btn blue_background pull-right" onClick={this.gotoHome.bind(this)}>Close</button>
        </div>
        <ModalBox open={this.state.openModalState} closeModal={this.removeModal.bind(this)} title={this.state.title} content={this.state.content}></ModalBox>
      </div>
    );
  }

}

export default ClaimReportBox;
