import React, {
  PureComponent,
  PropTypes
}                             from 'react';
import AnimatedView           from '../../components/animatedView/AnimatedView';
import CloseClaimTableBox     from '../../components/CloseClaimTableBox';

class CloseClaim extends React.Component {

  constructor(props, next) {
    super(props, next);

    this.state = {
      openModalState: true
    }
  }

  componentDidMount() {
    const { enterCloseClaim } = this.props;
    enterCloseClaim();
  }

  componentWillUnmount() {
    const { leaveCloseClaim } = this.props;
    leaveCloseClaim();
  }

  openModal() {
    this.setState({openModalState: false});
    console.log("Open modal pressed");
  }

  render() {
    return(

        <div className="container closeclaim_page">
          <div className="opencase_margin">
              <CloseClaimTableBox></CloseClaimTableBox>
            </div>    
          </div>          

    );
  }
}

CloseClaim.propTypes = {
  currentView       : PropTypes.string.isRequired,
  enterCloseClaim   : PropTypes.func.isRequired,
  leaveCloseClaim   : PropTypes.func.isRequired
};

export default CloseClaim;
