/* global $:true */

import React, {
  Component,
  PropTypes
}                                 from 'react';
import {Motion, spring, presets}  from 'react-motion';
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

    this.openDialogLicence          = this.openDialogLicence.bind(this);
    this.openDialogPrivacy          = this.openDialogPrivacy.bind(this);
    this.openDialogSecurity         = this.openDialogPrivacy.bind(this);
    this.removeModalLicence         = this.removeModalLicence.bind(this);
    this.removeModalPrivacy         = this.removeModalPrivacy.bind(this);

  }

  componentWillMount() {
    this.setState({titlePrivacy     : 'Privacy'});
    this.setState({contentPrivacy   : 'Quodsi invenire ut vel, animal inimicus explicari ea duo, \
                                       vidit dicant melius in mei. His ex semper intellegam.\
                                      In mei augue sapientem. Mea cu option theophrastus.\
                                       Ex labitur repudiare voluptatibus melad.'});
    this.setState({titleLicence     : 'Software Licence Agreements'});
    this.setState({contentLicence   : 'Quodsi invenire ut vel, animal inimicus explicari ea duo,\
                                      vidit dicant melius in mei. His ex semper intellegam.\
                                      In mei augue sapientem. Mea cu option theophrastus.\
                                      Ex labitur repudiare voluptatibus melad'});
    this.setState({titleSecurity    : 'Security'});
    this.setState({contentSecurity  : 'Quodsi invenire ut vel, animal inimicus explicari ea duo,\
                                      vidit dicant melius in mei. His ex semper intellegam.\
                                      In mei augue sapientem. Mea cu option theophrastus.\
                                      Ex labitur repudiare voluptatibus melad.'});
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.handleWindowScroll);
  }

  openDialogLicence() {
      this.setState({openModalLicence : true});
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

  openDialogSecurity() {
      this.setState({openModalSecurity : true});
  }

  removeModalSecurity() {
    window.location = '/';
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <legend></legend>
              <div className="text-center"><a href="#" onClick={this.openDialogLicence}>Software Licence Agreements</a>&nbsp;|&nbsp;<a href="#" onClick={this.openDialogPrivacy}>Privacy Statement</a>&nbsp;|&nbsp;<a href="#" onClick={this.openDialogSecurity}>Security</a></div>
              <div className="text-center">©2017 Claimzen, Inc. All rights reserved.</div>
        </div>
     
        <ModalBox open={this.state.openModalLicence} closeModal={this.removeModalLicence} title={this.state.titleLicence} content={this.state.contentLicence}></ModalBox>
        <ModalBox open={this.state.openModalPrivacy} closeModal={this.removeModalPrivacy} title={this.state.titlePrivacy} content={this.state.contentPrivacy}></ModalBox>
        <ModalBox open={this.state.openModalSecurity} closeModal={this.removeModalSecurity.bind(this)} title={this.state.titleSecurity} content={this.state.contentSecurity}></ModalBox>
        
      </div>
      
    );
  }

}

export default FooterBox;
