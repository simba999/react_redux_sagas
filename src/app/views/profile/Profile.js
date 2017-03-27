import React, {
  PureComponent,
  PropTypes
}                             from 'react';

import {browserHistory}       from 'react-router';
import {Jumbotron}            from '../../components';
import AnimatedView           from '../../components/animatedView/AnimatedView';
import { Link }               from 'react-router';
import ProfileBox             from '../../components/ProfileBox';
import RightSideBox           from '../../components/RightSideBox';
import ModalBox               from '../../components/ModalBox';       

var activeUrl                   = '';

class Profile extends PureComponent {

  constructor(props, context) {

    super(props, context);

    this.state = {
      openModalState  : false,
      returnUrl       : '/dashboard',
    }

    const { enterHome, clickMenu } = this.props;
  }

  componentDidMount() {
    const { enterHome, clickMenu } = this.props;
    // console.log("Home: ", clickMenu);
    
    var content                     = document.getElementById("selectElement").getElementsByTagName("li");
    

    for (var i = 0; i < content.length; i++) {
      if( content[i].getAttribute('class') == 'active') {
        activeUrl                   =  content[i].firstElementChild.getAttribute('href');
      }
    }
    console.log("Header: ", activeUrl);
    enterHome(activeUrl);

    this.setState({ returnUrl : activeUrl });
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
              <ProfileBox title="Profile" content="" returnUrl={this.state.returnUrl}></ProfileBox>
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
