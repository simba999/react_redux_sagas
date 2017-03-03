import React, {
  PureComponent,
  PropTypes
}                             from 'react';
import AnimatedView           from '../../components/animatedView/AnimatedView';
import ClaimTableBox          from '../../components/ClaimTableBox';

class OpenCase extends React.Component {

  constructor(props, next) {
    super(props, next);

    this.state = {
      openModalState: true
    }
  }

  componentDidMount() {
    const { enterOpenCase } = this.props;
    enterOpenCase();
  }

  componentWillUnmount() {
    const { leaveOpenCase } = this.props;
    leaveOpenCase();
  }

  openModal() {
    this.setState({openModalState: false});
    console.log("Open modal pressed");
  }

  render() {
    return(

        <div className="container">
          <div className="opencase_margin">
              <ClaimTableBox></ClaimTableBox>
            </div>    
          </div>          

    );
  }
}

OpenCase.propTypes = {
  currentView     : PropTypes.string.isRequired,
  enterOpenCase   : PropTypes.func.isRequired,
  leaveOpenCase   : PropTypes.func.isRequired
};

export default OpenCase;
