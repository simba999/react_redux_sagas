import React, {
  PureComponent,
  PropTypes
}                             from 'react';
import {Jumbotron}            from '../../components';
import AnimatedView           from '../../components/animatedView/AnimatedView';
import { Link }               from 'react-router';
import validator          from 'validator';
  import ValidateGroup      from './ValidateGroup';
  import Validate           from './Validate';
  import ErrorMessage       from './ErrorMessage';
  import InputBox           from '../../components/InputBox';
  import InputBox1          from '../../components/InputBox1';
  import InputBox2          from '../../components/InputBox2';
  import InputBox3          from '../../components/InputBox3';
  import PasswordBox        from '../../components/PasswordBox';
  import EmailBox           from '../../components/EmailBox';
  import PhoneBox           from '../../components/PhoneBox';
  import CustomEmitter      from "../../modules/emitter";  

class Signup extends PureComponent {

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
 
        <div className="container homepage">
          Signup 
        </div>


    );
  }
}

Signup.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterHome:    PropTypes.func.isRequired,
  leaveHome:    PropTypes.func.isRequired
};

export default Signup;
