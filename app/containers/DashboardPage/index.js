/*
 *
 * DashboardPage
 *
 */

import React                      from 'react';
import { connect }                from 'react-redux';
import selectDashboardPage        from './selectors';
import elementClass               from "element-class";
import SignPasswordBox            from '../../components/SignPasswordBox';
import EmailBox                   from '../../components/EmailBox';
import InputBox                   from '../../components/InputBox';
import CustomEmitter              from "../../modules/emitter";
import Modal                      from 'react-bootstrap-modal';

export class DashboardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor() {
      super();

      this.state = {
        open                      : false,
        first_name                : '',
        btnActive                 : false,
        checkValidation           : false,
        isValid                   : true,
        passwordValue             : '',
        emailValue                : '',
        openPasswordDialog        : false,
        active                    : false,
        emailActive               : false,
        passwordActive            : false,
        validClass                : "form-group",
        notValidClass             : "form-group has-error",
        class                     : "form-group",
        passwordActiveClass       : "form-group",
        showOrHide                : false,

      };

      this.closeModal             = this.closeModal.bind(this);
      this.handlePasswordOpen     = this.handlePasswordOpen.bind(this);

      this.listener               = new CustomEmitter();
      console.log("listener",this.listener)
    }

  componentDidMount() {
      elementClass(document.documentElement).add('a');
      elementClass(document.documentElement).add('b');
      elementClass(document.documentElement).add('c');
    }

    componentWillUnmount() {
      elementClass(document.documentElement).remove('a');
      elementClass(document.documentElement).remove('b');
      elementClass(document.documentElement).remove('c');
    }

    componentWillMount() {
      this.setState({emailValue: ''});
      this.setState({passwordValue: ''});
    }

    inputName(event) {
      console.log(event.target.value);
      console.log(event.target.value.length);
      if(event.target.value.length > 0) {
        this.setState({btnActive: true});
      } else {
        this.setState({btnActive: false});
      }
    }


    // Actions
    emailChange(event) {
      this.inputName(event);
      
      // if(this.refs.emailInput.value.length == 0) {
      //   this.setState({class: this.state.notValidClass});
      //   this.setState({emailActive: false});
      // } else {
        var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
        if (re.test(this.refs.emailInput.value) == false) {
          this.setState({class: this.state.notValidClass}); 
          this.setState({emailActive: false});
        } else {
          this.setState({class: this.state.validClass});
          this.setState({emailActive: true});
          this.setState({emailValue: event.target.value});
        } 
      // }

    }

    passwordChange(event) {
      this.inputName(event);
      this.setState({passwordValue: event.target.value});

      if(this.refs.input.value.length <8) {
        this.setState({passwordActiveClass: this.state.notValidClass})
        this.setState({passwordActive: false});
      } else {
        this.setState({passwordActiveClass: this.state.validClass})
         this.setState({passwordActive: true});
         this.setState({passwordValue: event.target.value});
      }
    }

    goToLogin() {
      window.location = '/login';
    }

    handleSignin() {

      console.log("CheckValidation: ", this.state.checkValidation);
      console.log("emailActive: ", this.state.emailActive);
      console.log("passwordActive: ", this.state.passwordActive);

      if ( this.state.emailActive && this.state.passwordActive ) {
        this.setState({isValid: true});
      } else {
        this.setState({isValid: false});
      }

      console.log("passwordValue: ", this.state.passwordValue);
      console.log("emailValue: ", this.state.emailValue);

      if (this.state.passwordValue == '111111111' && this.state.emailValue == 'a@a.com')  {
          window.location = '/dashboard';
          // this.setState({open: false});
      } else {
          this.setState({open: true});
      }

    }


    //Modal Dialog Handler
    handleCancel() {
      window.location = '/login';
    }

    closeModal() {
      this.setState({openPasswordDialog: false});
      this.setState({open: false});
    }

    handlePasswordOpen() {
      // this.setState({openPasswordDialog: true});
    }

  //View
  render() {
    return (
      <div>DashboardPage</div>
    );
  }
}

const mapStateToProps = selectDashboardPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
