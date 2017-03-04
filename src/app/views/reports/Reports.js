import React, {
  PureComponent,
  PropTypes
}                             from 'react';
import AnimatedView           from '../../components/animatedView/AnimatedView';
import ReportsBox             from '../../components/ReportsBox';

class Reports extends React.Component {

  constructor(props, next) {
    super(props, next);

    this.state = {
      openModalState: true
    }
  }

  componentDidMount() {
    const { enterReports } = this.props;
    enterReports();
  }

  componentWillUnmount() {
    const { leaveReports } = this.props;
    leaveReports();
  }

  openModal() {
    this.setState({openModalState: false});
    console.log("Open modal pressed");
  }

  render() {
    return(

        <div className="container">
          <div className="opencase_margin">
              <ReportsBox></ReportsBox>
            </div>    
          </div>          

    );
  }
}

Reports.propTypes = {
  currentView       : PropTypes.string.isRequired,
  enterReports      : PropTypes.func.isRequired,
  leaveReports      : PropTypes.func.isRequired
};

export default Reports;
