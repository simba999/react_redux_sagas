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

    this.setActive = this.setActive.bind(this);
  }

  componentWillMount() {
    // window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleWindowScroll);
  }

  setActive(el) {
    console.log("INDEX: ", el.target.parentNode.parentNode.childNodes);
    var allSiblings = el.target.parentNode.parentNode.childNodes;
    var count = 0
    while ( count < allSiblings.length) {
      console.log("TET: ", allSiblings[count].getAttribute("class"));
      if (allSiblings[count].getAttribute("class") == 'active') {
        allSiblings[count].setAttribute("class", "");
      } 
      count ++;
    }

    el.target.parentNode.setAttribute("class", "active");
  }

  showSummary(el) {
    this.setState({isForm     : false});
    this.setState({isFoler    : false});
    this.setState({isSummary  : true});

    this.setActive(el);
  }

  showForm(el) {
    this.setState({isForm     : true});
    this.setState({isSummary  : false});
    this.setState({isFolder   : false});

    this.setActive(el);
  }

  showFolder(el) {
    this.setState({isForm     : false});
    this.setState({isSummary  : false});
    this.setState({isFolder   : true});

    this.setActive(el);
  }

  render() {

    return (
      <div className="white-panel panel-margin">
        <div className="form-horizontal header_text">
          <span className="">{this.props.title}</span>
          <span className="pull-right"><i className="glyphicon glyphicon-remove"></i></span> 
            <ul className=" list-inline header_menu pull-right" id="selecetElementInfo">
              <li><a href="#" onClick={this.showForm.bind(this)}>Form</a></li>
              <li><a href="#" onClick={this.showFolder.bind(this)}>Folder</a></li>
              <li><a href="#" onClick={this.showSummary.bind(this)}>Summary</a></li>             
            </ul>
            <hr />
        </div>
        {
          this.state.isForm ?
            <div className="form-horizontal content_text">
              <div style={{padding: '0px 0px 25px 0px'}}>
                <span>{this.props.content}</span>
                <div className="pull-right">
                <ul className="radiogroup list-inline">
                  <li>
                    <input type="radio" name="adoption_check" value="Yes"/>&nbsp;<label>Yes</label>&nbsp;
                  </li>
                  <li>
                    <input type="radio" name="adoption_check" value="Yes" />&nbsp;<label>No</label>&nbsp;
                  </li>
                </ul>
                </div>
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
            <div className="content_text">
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

        {
          this.state.isFolder ?
            <div className="content_text">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Posted File</th>
                    <th>Saved File</th>
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
