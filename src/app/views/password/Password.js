import React, {
  PureComponent,
  PropTypes
}                             from 'react';
import {Jumbotron}            from '../../components';
import AnimatedView           from '../../components/animatedView/AnimatedView';
import { Link }               from 'react-router';
import ChartBox               from '../../components/ChartBox';
import RightSideBox           from '../../components/RightSideBox';
import ModalBox               from '../../components/ModalBox';       

class Password extends PureComponent {

  constructor(props, context) {

    super(props, context);

    this.state = {
      openModalState: false
    }

    const { enterHome, clickMenu } = this.props;
  }

  componentDidMount() {
    const { enterHome, clickMenu } = this.props;
    // console.log("Home: ", clickMenu);
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
    clickMenu();
  }

  removeModal() {
    this.setState({openModalState : false});
  }

  render() {
    return(
 
        <div className="container">
          <div className="opencase_margin">
            <div className="col-sm-9">
              <ChartBox title="Password" content=""></ChartBox>
            </div>
            <div className="col-sm-3">
              <RightSideBox></RightSideBox>
            </div>
          </div>  
        </div>


    );
  }
}

Password.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterHome:    PropTypes.func.isRequired,
  leaveHome:    PropTypes.func.isRequired
};

export default Password;