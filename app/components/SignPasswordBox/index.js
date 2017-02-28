/**
 *
 * Checkbox
 *
 */
import React from "react";
import CustomEmitter from "../../modules/emitter";


class SignPasswordBox extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props, context) {
    super(props, context);

    this.state = {
      active            : false,
      validClass        : "form-group",
      notValidClass     : "form-group has-error",
      class             : "",
      showOrHide        : false,
      firstCondition    : false,
      secondCondition   : false,
      thirdCondition    : false,
      fourthCondition   : false,
      isPassword        : false,
      showContent       : 'Show'
    };
    
    this.listener = new CustomEmitter();
  }

  set_state(new_state) {
    this.setState({active: true});
  }

  componentWillMount() {
    this.setState({class: this.state.validClass});
  }

  componentWillReceiveProps(nextProps){ 

    if(nextProps.check != this.props.check) {
      if(this.refs.input.value.length > 0) {
        console.log("Ref: ", this.refs.input.value, " : ", "true");
        this.setState({class: this.state.validClass});
        this.setState({active: true});
      } else {
        console.log("Ref ok: ", this.refs.input.value, " : ", "false");
        this.setState({class: this.state.notValidClass});
        this.setState({active: false});
      }
    }
  }
  // handler declaration
  //return state
  getData() {
    return this.state;
  }

  render() {
    return (
       <div className={this.state.class}>
          <label className={this.props.labelClass == undefined ? 'col-md-4 control-label' : this.props.labelClass}>{this.props.label}</label>  
          <div className={this.props.containClass == undefined ? "col-md-8 inputGroupContainer" : this.props.containClass}>
            <div className="">
              <div>
                <input ref="input" placeholder={this.props.placeholder} className={this.props.nameClass} onChange={this.props.change.bind(this)} type="password" />
              </div>  
            </div>
          </div>
        </div>
    );
  }  
}

SignPasswordBox.propTypes = {
  label           : React.PropTypes.string.isRequired,
  placeholder     : React.PropTypes.string,
  change          : React.PropTypes.func.isRequired,
  check           : React.PropTypes.bool.isRequired,
  nameClass       : React.PropTypes.string,
  labelClass      : React.PropTypes.string,
  containClass    : React.PropTypes.string
};

export default SignPasswordBox;
