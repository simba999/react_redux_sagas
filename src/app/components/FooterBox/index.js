/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
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
    window.location = '/';
  }

  openDialogPrivacy() {
      
      this.setState({openModalPrivacy : true});
  }

  removeModalPrivacy() {
    window.location = '/';
  }

  removeModalSecurity() {
    window.location = '/';
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
              <div className="text-center"><a href="#" onClick={this.gotoLicence.bind(this)}>Software Licence Agreements</a>&nbsp;|&nbsp;<a href="privacy">Privacy Statement</a>&nbsp;|&nbsp;<a href="security">Security</a></div>
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
