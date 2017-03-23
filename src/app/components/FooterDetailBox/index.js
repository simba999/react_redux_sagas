/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import {Link, browserHistory}     from 'react-router';
import {Motion, spring, presets}  from 'react-motion';
import { connect }                from 'react-redux';
import * as eventActions          from '../../redux/modules/event';

class FooterDetailBox extends React.Component {

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

  gotoHome(e) {
    browserHistory.push('dashboard');
    // console.log("Dom: ", e.target);
    // console.log("GoHome: ", e.target.attributes.getNamedItem('value').value);
    // window.location = this.props.sUrl;
  }

  setActive(el) {
    var allSiblings = el.target.parentNode.parentNode.childNodes;
    var count = 0
    while ( count < allSiblings.length) {
      if (allSiblings[count].getAttribute("class") == 'active') {
        allSiblings[count].setAttribute("class", "");
      } 
      count ++;
    }

    el.target.parentNode.setAttribute("class", "active");
  }
  
  render() {

    return (
      <div className="white-panel panel-margin">
        <div className="form-horizontal header_text footer_page">
          <span className="">{this.props.title}</span>
          <span className="pull-right"><label className="remove_icon1 padding_inner_box" onClick={this.gotoHome.bind(this)} value={this.props.sUrl}></label></span>
          <hr />
        </div>

        <div className="form-horizontal content_text">
          <span>{this.props.content}</span>
        </div>
        <div className="footer_text payment_page">
            <hr />
            <div className="pull-right">
              <a href="#" className="btn close_button">Close</a> 
            </div>
        </div>
      </div>
    );
  }

}

FooterDetailBox.propTypes = {
  title         : React.PropTypes.string.isRequired,
  content       : React.PropTypes.string,
  sUrl          : React.PropTypes.string,
  onFilter      : PropTypes.func,
  currentView   : PropTypes.string.isRequired,

}


const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView,
    // filter:       state.filter.filter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      onFilter:  (filterText) => dispatch(eventActions.filterTable(filterText)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterDetailBox);

