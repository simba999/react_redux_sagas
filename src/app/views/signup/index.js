import React, {
  PureComponent,
  PropTypes
}                             from 'react';
import {Jumbotron}            from '../../components';
import AnimatedView           from '../../components/animatedView/AnimatedView';
import { Link }               from 'react-router';
import validator              from 'validator';
import InputBox               from '../../components/InputBox';
import InputBox1              from '../../components/InputBox1';
import InputBox2              from '../../components/InputBox2';
import InputBox3              from '../../components/InputBox3';
import PasswordBox            from '../../components/PasswordBox';
import EmailBox               from '../../components/EmailBox';
import PhoneBox               from '../../components/PhoneBox';
import ModalBox               from '../../components/ModalBox';
import CustomEmitter          from "../../modules/emitter";
import Modal                  from 'react-bootstrap-modal';
import HeaderBox              from '../../components/HeaderBox';
  

class Signup extends PureComponent {

  constructor(props, context) {

    super(props, context);


      this.state = {
        open                : false,
        first_name          : '',
        btnActive           : false,
        checkValidation     : false,
        isValid             : false,
        firstValid          : false,
        secondValid         : false,
        isInvitation        : false

      };

      this.handleShow       = this.handleShow.bind(this);
      this.closeModal       = this.closeModal.bind(this);
      this.inputName        = this.inputName.bind(this);
      this.getChildState    = this.getChildState.bind(this);

      this.listener         = new CustomEmitter();

      this.firstData        = {};
      this.lastData         = {};
      this.emailData        = {};
      this.lawfirmData      = {};
      this.invitationData   = {};
      this.passwordData     = {};
      this.phoneData        = {};

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

  componentWillMount() {
      this.setState({isValid: true});
      this.setState({checkValidation: true});
  }

  openModal() {
    this.setState({openModalState: true});
    console.log("Open modal pressed");
    clickMenu();
  }

  removeModal() {
    this.setState({openModalState : false});
  }

  //Page Actions Here
    handleShow() {
      this.setState({ open: true })
    }

    getChildState() {

      var firstData             = Object.assign(
          {},
          this._InputBox.getData()
        );

      var lastData              = Object.assign(
        {},
        this._InputBox1.getData()
      );

      var lawfirmData           = Object.assign(
        {},
        this._InputBox2.getData()
      );

      var invitationData        = Object.assign(
        {},
        this._InputBox3.getData()
      );

      var passwordData          = Object.assign(
        {},
        this._PasswordBox.getData()
      );

      var emailData             = Object.assign(
          {},
          this._EmailBox.getData()
        );

      var phoneData             = Object.assign(
          {},
          this._EmailBox.getData()
        );

      let count = 0;

      if (firstData.active == true) { count++; }
      if (lastData.active == true) { count++; }
      if (emailData.active == true) { count++; }
      if (phoneData.active == true) { count++; }
      if (passwordData.active == true) { count++; }
      if (lawfirmData.active == true) { count++; }
      if (invitationData.active == true) { count++; }

      this.firstData            = firstData;
      this.lastData             = lastData;
      this.emailData            = emailData;
      this.phoneData            = phoneData;
      this.lawfirmData          = lawfirmData;
      this.invitationData       = invitationData;
      this.passwordData         = passwordData;

      // console.log("fistData: ", this.firstData);
      // console.log("lastData: ", this.lastData);
      // console.log("lawfirmData: ", this.lawfirmData);
      // console.log("invitationData: ", this.invitationData);
      // console.log("passwordData: ", this.passwordData);
      // console.log("emailData: ", this.emailData);

      return count;
    }

    inputName(event) {
      if(event.target.value.length > 0) { 
        this.setState({btnActive: true});
      } else {
        if (this.getChildState() > 1) {
          this.setState({btnActive: true});
        } else {
          this.setState({btnActive: false});
        }
        
      }
    }

    firstNameChange(event) {
      this.inputName(event);
    }

    secondNameChange(event) {
      this.inputName(event);

      if (event.target.value.length == 0) {
        this.setState({secondValid: true})
      }
    }

    passwordChange(event) {
      this.inputName(event);
    }

    emailChange(event) {
      this.inputName(event);
    }

    mobilePhoneChange(event) {
      this.inputName(event);
    }

    invitationCodeChange(event) {
      this.inputName(event);
      if (event.target.value == '111') {
        this.setState({isInvitation: true})
      } else {
        this.setState({isInvitation: false})
      }  
    }

    lawFirmChange(event) {
      this.inputName(event);
    }

    goToLogin() {
      window.location = '/';
    }

    handleSignup() {
      this.setState({checkValidation: true});

      let count                 = 0;

      count                     = this.getChildState();

      console.log("fistData: ", this.firstData);
      console.log("lastData: ", this.lastData);
      console.log("lawfirmData: ", this.lawfirmData);
      console.log("invitationData: ", this.invitationData);
      console.log("passwordData: ", this.passwordData);
      console.log("emailData: ", this.emailData);

      if (count < 7) {
        
        this.setState({isValid: false})

      } else {

        this.setState({isValid: true})

        if (this.state.isInvitation == true) {

          window.location        = '/home';

        } else {
          console.log("Dialog");
          this.setState({open: true})

        }

      }

    }

    //Modal Actions
    handleAbout() {
      this.setState({openValid: true}) 
    }

    closeModal() {
      this.setState({ open: false });
      this.setState({ openValid: false });
    }

    openContactModal() {
      this.setState({openModalState : true});
    }

    removeModal() {
      this.setState({openModalState : false});
    }

  render() {
    return(
          <div id="appContainer">
            <article className="passwordDialog">
            <div className="container allForm">
              
              <form  className="well form-horizontal" action="" method="post"  id="contact_form">
                  <div className="form-horizontal title_header">
                    <span className="pull-left">Create your account</span>
                    <span className="pull-right" onClick={this.goToLogin}><i className="glyphicon glyphicon-remove"></i></span>
                  </div>
                  <hr />
                  <div className="form-horizontal header_text">
                    If you don’t have an invitation code, please <a href="#" className="soft_blue">contact</a> us so we can provide you with one.
                  </div>
                  <fieldset>                  
                    <InputBox nameClass= "form-control" ref={(ref) => this._InputBox = ref } label="First Name" placeholder="First Name" change={this.firstNameChange.bind(this)}  check={this.state.checkValidation} />
                    <InputBox1 ref={(ref) => this._InputBox1 = ref } label="Last Name" placeholder="Last Name" change={this.secondNameChange.bind(this)}  check={this.state.checkValidation} nameClass="form-control" />
                    <InputBox2 ref={(ref) => this._InputBox2 = ref } label="Law Firm" placeholder="Law Firm" change={this.lawFirmChange.bind(this)}  check={this.state.checkValidation} nameClass="form-control" />
                    <PhoneBox ref={(ref) => this._PhoneBox = ref } nameClass="form-control" label="Mobile Phone" placeholder="Mobile Phone" change={this.mobilePhoneChange.bind(this)}  check={this.state.checkValidation} />
                    <EmailBox ref={(ref) => this._EmailBox = ref } label="Email" placeholder="Email" change={this.emailChange.bind(this)}  check={this.state.checkValidation} nameClass="form-control" />
                    <InputBox3 ref={(ref) => this._InputBox3 = ref } label="Invitation code" placeholder="Invitation code" change={this.invitationCodeChange.bind(this)}  check={this.state.checkValidation} nameClass="form-control" />
                    <PasswordBox ref={(ref) => this._PasswordBox = ref } nameClass="form-control" label="Passowrd" placeholder="Passowrd" change={this.passwordChange.bind(this)}  check={this.state.checkValidation} nameClass="form-control" />                  
                  </fieldset>
                    
                    <div><a href="#" className="pull-right signup_about" onClick={this.handleAbout.bind(this)}>About</a></div>

                    <hr />

                  <div className="form-group">
                  {
                    this.state.isValid == false ?
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
                        <a href="/" className="link_soft_blue">Cancel</a>
                        <button type="button" className={ this.state.btnActive ? 'btn btn-primary' : 'btn btn_grey' } disabled={!this.state.btnActive} onClick={this.handleSignup.bind(this)} >Sign up </button>
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
                show={this.state.openValid}
                onHide={this.closeModal}
                aria-labelledby="ModalHeader">

                <Modal.Body>
                  <div className="header_text login_form" >
                    <span className="pull-left">About</span>
                    <span className="pull-right" onClick={this.closeModal}><i className="glyphicon glyphicon-remove"></i></span>
                    <hr />
                  </div>
                  <div className="content_text">
                    <div className="textModal">
                      <div className="paragraph">Lorem ipsum dolor sit amet, ne pri hinc voluptatibus. Eu eleifend eloquentiam sea. Duis soluta mei cu. Sumo consul definitiones vis at, error soleat principes eu quo.</div>
                      <ul className="paragraph">
                        <li>Quodsi invenire ut vel, animal inimicus explicari ea duo, vidit dicant melius in mei.</li>
                        <li>His ex semper intellegam. In mei augue sapientem. Mea cu option theophrastus. Ex labitur repudiare voluptatibus mel, copiosae urbanitas qui.</li>
                      </ul>
                      <div className="paragraph">Pro tation veritus, eu vel albucius expetenda, eu vis sale paulo adolescens. Et vel vidit nulla maluisset, et vis odio nulla doming. Ea consequat moderatius sit. Has natum error corpora in, liber aeque ridens</div>
                    </div>
                  </div>
                  <div className="footer_text">
                    <hr />
                    <Modal.Dismiss className='btn btn-primary pull-right'>Close</Modal.Dismiss>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </article>
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
