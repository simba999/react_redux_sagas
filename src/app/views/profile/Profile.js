import React, {
  PureComponent,
  PropTypes
}                             from 'react';
import {Jumbotron}            from '../../components';
import AnimatedView           from '../../components/animatedView/AnimatedView';
import { Link }               from 'react-router';
import ProfileBox             from '../../components/ProfileBox';
import RightSideBox           from '../../components/RightSideBox';
import ModalBox               from '../../components/ModalBox';       

class Profile extends PureComponent {

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
 
        <div className="container account_page">
          <div className="opencase_margin">
            <div className="col-sm-9 left_panel_two">
              <ProfileBox title="Profile" content=""></ProfileBox>
            </div>
            <div className="col-sm-3 right_panel_two">
              <RightSideBox></RightSideBox>
            </div>
          </div>  
        </div>


    );
  }
}

Profile.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterHome:    PropTypes.func.isRequired,
  leaveHome:    PropTypes.func.isRequired
};

export default Profile;
