/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import {Motion, spring, presets}  from 'react-motion';
import {Link}                     from 'react-router';
import ModalBox                   from '../ModalBox';

class InfoContentBox extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      openModalState  : false,
      title           : '',
      content         : '',
      isForm          : true,
      isSummary       : false,
      isFolder        : false
    }

    this.setActive = this.setActive.bind(this);
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

    console.log("Form: ", this.state.isForm);
    console.log("Folder:", this.state.isFolder);
    console.log("Summary: ", this.state.isSummary);
  }

  showSummary(el) {
    this.setState({isFolder    : false});
    this.setState({isForm     : false});  
    this.setState({isSummary  : true});

    this.setActive(el);
  }

  showForm(el) {
    this.setState({isSummary  : false});
    this.setState({isFolder   : false});
    this.setState({isForm     : true});

    this.setActive(el);
  }

  showFolder(el) {
    this.setState({isForm     : false});
    this.setState({isSummary  : false});
    this.setState({isFolder   : true});

    this.setActive(el);
  }

  openContactModal() {
    // this.setState({title : 'Contact'});
    this.setState({openModalState : true});
    // this.setState({content : 'Lorem ipsum dolor sit amet, ne pri hinc voluptatibus.\
    //                           Eu eleifend eloquentiam sea. Duis soluta mei cu.\
    //                            Sumo consul definitiones vis at, error soleat'});
  }

  removeModal() {
    this.setState({openModalState : false});
  }

  gotoHome() {
    window.location = "/index";
  }

  setActive1(e) {
    var myElement = document.getElementById("yesAndNo");
    if ( myElement.getElementsByTagName("input")[0].checked == false ) {
      myElement.getElementsByTagName("input")[0].checked = true;
      myElement.getElementsByTagName("input")[1].checked = false;
    } 
    
  }

  setActive2(e) {
    var myElement = document.getElementById("yesAndNo");
    console.log("DFDFdfd: ", myElement.getElementsByTagName("input")[1].checked);
    if (myElement.getElementsByTagName("input")[1].checked == false) {
      myElement.getElementsByTagName("input")[0].checked = false;
      myElement.getElementsByTagName("input")[1].checked = true;
    }
  }

  gotoIndexPage() {
    window.location = '/index';
  }

  render() {

    return (
      <div className="white-panel panel-margin">
        <div className="form-horizontal header_text">
          <span className="">{this.props.title}</span>
          <span className="pull-right"><label className="remove_icon padding_inner_box" onClick={this.gotoHome.bind(this)}></label></span> 
            <ul className=" list-inline header_menu pull-right" id="selectElementInfo">
              <li className="active" style={{margin: '0 10px 0 0'}}><a href="#" onClick={this.showForm.bind(this)}>Form</a></li>
              <li style={{margin: '0 10px 0 0'}}><a href="#" onClick={this.showFolder.bind(this)}>Folder</a></li>
              <li style={{margin: '0 5px 0 0'}}><a href="#" onClick={this.showSummary.bind(this)}>Summary</a></li>             
            </ul>
            <hr />
        </div>
        {
          this.state.isForm ?
            <div className="form-horizontal content_text">
              <div style={{padding: '0px 0px 25px 0px'}}>
                <span>{this.props.content}</span>
                <div className="pull-right">
                <div className="radiogroup" id="yesAndNo">
                  
                    <input type="radio" name="adoption_check" value="Yes" defaultChecked="true" />&nbsp;
                    <label onClick={this.setActive1.bind(this)}>Yes</label>&nbsp;
                 
                    <input type="radio" name="adoption_check" value="No" />&nbsp;
                    <label onClick={this.setActive2.bind(this)}>No</label>&nbsp;
                 
                </div>
                </div>
              </div>
              <div>
                <a href="#" onClick={this.openContactModal.bind(this)}>about</a>
              </div>
              
            </div>
          :
            ''
        }
        {
          this.state.isSummary ?
            <div className="form-horizontal content_text">
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
            <div className="form-horizontal content_text">
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
        <div className="footer_text">

          <a className="btn close_button pull-right" onClick={this.gotoHome.bind(this)}>Close</a>
          <a href="#" className="pull-right edit_link" style={{color: '#66cfff'}}>Edit</a>
        </div>
        <ModalBox open={this.state.openModalState} closeModal={this.removeModal.bind(this)} title={this.state.title} content={this.state.content}></ModalBox>
      </div>
    );
  }

}

InfoContentBox.propTypes = {
  title       : React.PropTypes.string.isRequired,
  content     : React.PropTypes.string
}

export default InfoContentBox;
