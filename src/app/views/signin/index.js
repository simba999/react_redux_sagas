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
import elementClass           from "element-class";
import SignPasswordBox        from '../../components/SignPasswordBox';
import EmailBox               from '../../components/EmailBox';
import InputBox               from '../../components/InputBox';
import CustomEmitter          from "../../modules/emitter";
import Modal                  from 'react-bootstrap-modal';
import HeaderBox              from '../../components/HeaderBox';       

class Signin extends PureComponent {

  constructor(props, context) {

      super(props, context);

      this.state = {
        open                      : false,
        first_name                : '',
        btnActive                 : false,
        checkValidation           : false,
        isValid                   : false,
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
     
    }

    componentWillUnmount() {
    
    }

    componentWillMount() {
      this.setState({emailValue: ''});
      this.setState({passwordValue: ''});
      this.setState({isValid: true});
      this.setState({checkValidation: true});
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
      window.location             = '/';
    }

    handleSignin() {

      console.log("CheckValidation: ", this.state.checkValidation);
      console.log("emailActive: ", this.state.emailActive);
      console.log("passwordActive: ", this.state.passwordActive);

      if ( this.state.emailActive && this.state.passwordActive ) {
        this.setState({isValid: true});

        if (this.state.passwordValue == '111111111' && this.state.emailValue == 'a@a.com')  {
          window.location         = 'home';
          // this.setState({open: false});
        } else  {
            this.setState({open: true});
        }
      } else {
        this.setState({isValid: false});
      }


    }


    //Modal Dialog Handler
    handleCancel() {
      window.location             = '/';
    }

    closeModal() {
      this.setState({openPasswordDialog: false});
      this.setState({open: false});
    }

    handlePasswordOpen() {
      // this.setState({openPasswordDialog: true});
    }

  render() {
    return(
          <div id="appContainer">
           <article>
            <div className="container allForm">
              
              <form  className="well form-horizontal" action="" method="post"  id="contact_form">
                  <div className="form-horizontal title_header">
                    <span className="pull-left">Sign in</span>
                    <span className="right_end" onClick={this.goToLogin.bind(this)}><label className="remove_icon1 padding_inner_box"></label></span>
                  </div>
                  <hr />
                  <section>                  
                    <div className={this.state.class}>
                      <label className=""></label>  
                      <div className="col-md-12 inputGroupContainer1">
                        <div className="">                        
                          <input ref="emailInput" placeholder="Email" className="form-control"  type="text" onChange={this.emailChange.bind(this)} type="text"/>               
                        </div>
                      </div>
                    </div>
                    <div className={this.state.passwordActiveClass}>
                      <label className="col-md-12 inputGroupContainer1"> </label>  
                      <div className="col-md-12 inputGroupContainer1">
                        <div className="">
                          <div>
                            <input ref="input" placeholder="Password" className="form-control" onChange={this.passwordChange.bind(this)} type="password" />
                          </div>  
                        </div>
                      </div>
                    </div>                   
                    
                    <div className="form-group">
                      <div className="col-md-8"></div>
                      <div className="col-md-4">
                        <div className="begin_right">
                              <a href="#" className="link_soft_blue" onClick={this.handlePasswordOpen} >Password</a>
                              <button type="button" className={this.state.btnActive ? 'btn' : 'btn btn_grey'} disabled={!this.state.btnActive} onClick={this.handleSignin.bind(this)} > Sign in </button>
                        </div> 
                      </div>
                    </div>
                    <div className=" padding_bottom_50"></div>
                  </section>
                  
                  <hr />

                  <div className="form-group">
                  {
                    !this.state.isValid ?
                      <div className="alert_form">
                        <div className="col-md-2"></div>
                        <div className="col-md-4 alert_vaild">
                          Please complete the missing information.
                        </div>
                        <div className="col-md-2"></div>
                      </div>  
                    :
                      <div className="col-md-8 control-label"></div>
                  }
                    <div className="col-md-4">
                        <div className="begin_right">
                          <button type="button" className='btn' onClick={this.goToLogin}> Cancel </button>
                        </div>
                    </div>
                  </div>

              </form>
              
              <Modal
                show={this.state.open}
                onHide={this.closeModal}
                aria-labelledby="ModalHeader">

                <Modal.Body>
                  <div className="header_text login_form" >
                    <span className="pull-left">Notice</span>
                    <span className="pull-right" onClick={this.closeModal}><i className="glyphicon glyphicon-remove"></i></span>
                    <hr />
                  </div>
                  <div className="content_text">
                    <div className="textModal">Your invitation code is in-correct or in-valid. If you don’t have an invitation code, or need an updated code please <a> contact </a> us so we can provide you with one.</div> 
                  </div>
                  <div className="footer_text">
                    <hr />
                    <Modal.Dismiss className='btn pull-right'>Close</Modal.Dismiss>
                  </div>

                </Modal.Body>
              </Modal>

              <Modal
                show={this.state.openPasswordDialog}
                onHide={this.closeModal}
                aria-labelledby="ModalHeader">

                <Modal.Header closeButton>
                  <Modal.Title id='ModalHeader'>
                    <div className="form-horizontal title_header">
                      <span className="pull-left">Getting help signing into your account</span>                 
                    </div>
                    <hr />
                  </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <div className="modalDialogClass">
                    <div className="textModal">
                      <div className="paragraph">To make sure your Claimzen account is secure, we would like to verify your identity. Enter your email or mobile phone number below and we will send you a verification code.</div>   
                    </div>
                    <div className="closeButton">
                      <Modal.Dismiss className='btn pull-right'>Close</Modal.Dismiss>
                    </div>
                    <div className="padding_div_bottom"></div>
                  </div>

                </Modal.Body>
              </Modal>

            </div>
          </article>
        </div>
    );
  }
}

Signin.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterHome:    PropTypes.func.isRequired,
  leaveHome:    PropTypes.func.isRequired
};

export default Signin;
