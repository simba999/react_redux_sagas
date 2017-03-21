import React, {
  PureComponent,
  PropTypes
}                             from 'react';
import {Jumbotron}            from '../../components';
import AnimatedView           from '../../components/animatedView/AnimatedView';
import { Link }               from 'react-router';
import ChartBox               from '../../components/ChartBox';
import LeftSideBox            from '../../components/LeftSideBox';
import ModalBox               from '../../components/ModalBox';
import InfoContentBox         from '../../components/InfoContentBox';
import ClaimReportBox         from '../../components/ClaimReportBox';  

class ClaimReport extends PureComponent {

  constructor(props, context) {

    super(props, context);

    this.state = {
      openModalState: false
    }
  }

  componentDidMount() {
    const { enterHome, clickMenu } = this.props;
    console.log("Home: ", clickMenu);
    enterHome();
    // clickMenu();
  }

  componentWillUnmount() {
    const { leaveHome } = this.props;
    leaveHome();
  }

  openModal() {
    this.setState({openModalState: true});
    console.log("Open modal pressed");
    // this.props.clickMenu();
  }

  removeModal() {
    this.setState({openModalState : false});
  }

  render() {
    return(
      <div className="container claim_report">
        <div className="opencase_margin">
          <ClaimReportBox></ClaimReportBox>
        </div>
      </div>
    );
  }
}

ClaimReport.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterHome:    PropTypes.func.isRequired,
  leaveHome:    PropTypes.func.isRequired
};

export default ClaimReport;
