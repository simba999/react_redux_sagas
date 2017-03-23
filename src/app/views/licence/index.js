import React, {
  PureComponent,
  PropTypes
}                             from 'react';
import {Jumbotron}            from '../../components';
import AnimatedView           from '../../components/animatedView/AnimatedView';
import { Link }               from 'react-router';
import FooterDetailBox        from '../../components/FooterDetailBox';
import RightSideBox           from '../../components/RightSideBox';
import ModalBox               from '../../components/ModalBox';       

class Licence extends PureComponent {

  constructor(props, context) {

    super(props, context);

    this.state = {
      openModalState: false
    }

    const { enterHome, clickMenu } = this.props;
  }

  componentDidMount() {
    //const { enterHome, clickMenu } = this.props;
    // console.log("Home: ", clickMenu);
    //enterHome();
    // clickMenu();
  }

  componentWillUnmount() {
    //const { leaveHome } = this.props;
    //leaveHome();
    console.log("Redux: ", this.props.currentView);
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
 
        <div className="container homepage">
          <div className="opencase_margin">
            <div className="col-sm-9 left_panel_one">
              <FooterDetailBox title="Software Licence Agreement" content="" sUrl={this.props.currentView}></FooterDetailBox>
            </div>
            <div className="col-sm-3 right_panel_one">
              <RightSideBox></RightSideBox>
            </div>
          </div>  
        </div>


    );
  }
}

Licence.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterHome:    PropTypes.func,
  leaveHome:    PropTypes.func
};

export default Licence;
