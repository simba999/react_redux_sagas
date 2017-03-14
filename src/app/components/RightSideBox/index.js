/* global $:true */

import React, {
  Component,
  PropTypes
}                                     from 'react';
import {Motion, spring, presets}      from 'react-motion';
import ModalBox                       from '../../components/ModalBox';
import StepBox                        from '../../components/OpenMatter/StepBox';
import Step2Box                       from '../../components/OpenMatter/StepBox/Step2Box';
import Step3Box                       from '../../components/OpenMatter/StepBox/Step3Box';
import Step4Box                       from '../../components/OpenMatter/StepBox/Step4Box';
import Step5Box                       from '../../components/OpenMatter/StepBox/Step5Box';
import WizardForm                     from '../../components/Wizard/WizardForm';

class RightSideBox extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      flag: false,
      openModalState : false,
      title          : '',
      content        : '',
      openStep1State : false,
      openStep2State : false,
      openStep3State : false,
      openStep4State : false,
      openStep5State : false,
      titleStep1     : '',
    }
  }

  componentWillMount() {
    this.setState({title : "About"});
    this.setState({titleStep1 : "Step1"});

    this.setState({content : 
      "Lorem ipsum dolor sit amet, ne pri hinc voluptatibus.\
       Eu eleifend eloquentiam sea. Duis soluta mei cu.\
        Sumo consul definitiones vis at, error soleat"});
  }

  componentWillUnmount() {

  }

  openModal() {
    this.setState({openModalState : true});
  }

  openStep1Modal() {
    this.setState({openStep2State : false});
    this.setState({openStep1State : true});
  }

  openStep2Modal(e) {
    this.setState({openStep1State : false});
    this.setState({openStep3State : false});
    this.setState({openStep2State : true});
  }

  openStep3Modal(e) {
    this.setState({openStep2State : false});
    this.setState({openStep4State : false});
    this.setState({openStep3State : true});
  }
  openStep4Modal(e) {
    this.setState({openStep5State : false});
    this.setState({openStep3State : false});
    this.setState({openStep4State : true});
  }
  openStep5Modal(e) {
    this.setState({openStep4State : false});
    this.setState({openStep5State : true});
  }

  removeModal() {
    this.setState({openModalState : false});
    this.setState({openStep1State : false});
  }

  openOpenClaimModal() {
    window.location = '/opencase';
  }

  openWizard() {
    this.setState({flag : true});
  }

  removeStep1Modal() {
    this.setState({openStep1State : false});
    this.setState({openStep2State : false});
    this.setState({openStep3State : false});
    this.setState({openStep4State : false});
    this.setState({openStep5State : false});
  }


  render() {

    return (
      <div className="white-panel">
        <div className="right_header_text">
          <a className="btn btn-warning" onClick={this.openWizard.bind(this)}>Open New Matter</a>          
        </div>
        
        <div className="text_align_center">
          <a className="padding_left about_link" href="#" onClick={this.openModal.bind(this)}>About</a>
        </div>
        
        <div className="content_text"></div>

        {
          this.state.flag == true?
            <WizardForm></WizardForm>
          : 
            ''
        }

        <StepBox open={this.state.openStep1State} closeModal={this.removeStep1Modal.bind(this)} nextOpen={this.openStep2Modal.bind(this)}  title={this.state.titleStep1}></StepBox>
        <Step2Box open={this.state.openStep2State} closeModal={this.removeStep1Modal.bind(this)} prevOpen={this.openStep1Modal.bind(this)} nextOpen={this.openStep3Modal.bind(this)} title="step2"></Step2Box>
        <Step3Box open={this.state.openStep3State} closeModal={this.removeStep1Modal.bind(this)} prevOpen={this.openStep2Modal.bind(this)} nextOpen={this.openStep4Modal.bind(this)} title="step3"></Step3Box>
        <Step4Box open={this.state.openStep4State} closeModal={this.removeStep1Modal.bind(this)} prevOpen={this.openStep3Modal.bind(this)} nextOpen={this.openStep5Modal.bind(this)} title="step4"></Step4Box>
        <Step5Box open={this.state.openStep5State} closeModal={this.removeStep1Modal.bind(this)} prevOpen={this.openStep3Modal.bind(this)} nextOpen={this.openOpenClaimModal.bind(this)} title="step5"></Step5Box>

        <ModalBox open={this.state.openModalState} closeModal={this.removeModal.bind(this)}  title={this.state.title} content={this.state.content}></ModalBox>

      </div>
    );
  }

}

export default RightSideBox;
