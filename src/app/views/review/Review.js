import React, {
  PureComponent,
  PropTypes
}                             from 'react';
import {Jumbotron}            from '../../components';
import AnimatedView           from '../../components/animatedView/AnimatedView';
import { Link }               from 'react-router';
import ChartBox               from '../../components/ChartBox';
import ReviewLeftSideBox      from '../../components/ReviewLeftSideBox';
import ModalBox               from '../../components/ModalBox';
import ExtraContentBox        from '../../components/ExtraContentBox';
import IndexBox               from '../../components/IndexBox';   

class Review extends PureComponent {

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
      <div className="container info_page">
        <div className="opencase_margin">
          <div className="col-sm-3">
            <ReviewLeftSideBox></ReviewLeftSideBox>
          </div>
          <div className="col-sm-9">
            <ExtraContentBox title="Facts" content=""></ExtraContentBox>
          </div>
        </div>  
      </div>
    );
  }
}

Review.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterHome:    PropTypes.func.isRequired,
  leaveHome:    PropTypes.func.isRequired
};

export default Review;
