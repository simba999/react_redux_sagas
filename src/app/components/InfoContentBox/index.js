/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import {Motion, spring, presets}  from 'react-motion';

class InfoContentBox extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      isForm : true,
      isSummary : false
    }
  }

  componentWillMount() {
    // window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleWindowScroll);
  }
  showSummary() {
    this.setState({isForm : false});
    this.setState({isSummary : true});
  }

  showForm() {
    this.setState({isForm : true});
    this.setState({isSummary : false});
  }

  render() {

    return (
      <div className="white-panel panel-margin">
        <div className="form-horizontal header_text">
          <span className="">{this.props.title}</span>
          <span className="pull-right"><i className="glyphicon glyphicon-remove"></i></span>
          <span className="pull-right">
            <div className="header_menu">
              <a href="#" onClick={this.showSummary.bind(this)}>Summary</a>
            </div>
          </span>
          <span className="pull-right">
            <div className="header_menu">
              <a href="#">Folder</a>
            </div>
          </span>
          <span className="pull-right">
            <div className="header_menu">
              <a href="#" onClick={this.showForm.bind(this)}>Form</a>
            </div>
          </span>
          <hr />
        </div>
        {
          this.state.isForm ?
            <div className="form-horizontal content_text">
              <div>
                <span>{this.props.content}</span>
                <span className="pull-right">
                  <input type="radio" value="Yes" /><label>Yes</label>
                  <input type="radio" value="Yes" /><label>No</label>
                </span>
              </div>
              <div>
                <a>about</a>
              </div>
              
            </div>
          :
            ''
        }

        {
          this.state.isSummary ?
            <div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Summary</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          :
            ''
        }

        
      </div>
    );
  }

}

InfoContentBox.propTypes = {
  title       : React.PropTypes.string.isRequired,
  content     : React.PropTypes.string
}

export default InfoContentBox;
