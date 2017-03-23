/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import { Link, browserHistory }   from 'react-router';
import {Motion, spring, presets}  from 'react-motion';
import { connect }                from 'react-redux';
import * as eventActions          from '../../redux/modules/event';
import ModalBox                   from '../ModalBox';

class FooterBox extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      openModalState                : false,
      title                         : '',
      content                       : '',
      titleLicence                  : '',
      contentLicence                : '',
      titlePrivacy                  : '',
      contentPrivacy                : '',
      titleSecurity                 : '',
      contentSecurity               : '',
      openModalLicence              : false,
      openModalPrivacy              : false,
      openModalSecurity             : false
    }

  }

  componentWillMount() {
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleWindowScroll);
  }

  removeModalLicence() {
    // this.setState({openModalLicence : false});
    browserHistory.push('/');
  }

  openDialogPrivacy() {
      
      this.setState({openModalPrivacy : true});
  }

  removeModalPrivacy() {
    browserHistory.push('/');
  }

  removeModalSecurity() {
    browserHistory.push('/');
  }

  gotoLicence() {
    console.log("CurrentView DB: ", this.props);
    this.props.onFilter(this.props.currentView);
    // window.location = "licence";
  }

  render() {

    return (
      <div className="text_footer_color">
        <div className="row">
              <div className="text-center"><Link to="/licence" onClick={this.gotoLicence.bind(this)}>Software Licence Agreements</Link>&nbsp;|&nbsp;<Link to="/privacy">Privacy Statement</Link>&nbsp;|&nbsp;<Link to="/security">Security</Link></div>
              <div className="text-center ">©2017 Claimzen, Inc. All rights reserved.</div>
        </div>        
      </div>
      
    );
  }

}

FooterBox.PropTypes = {
  currentView  : PropTypes.string.isRequired,
  filter    : PropTypes.string,
  onFilter     : PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView,
    filter:       state
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
)(FooterBox);

// export default FooterBox;
