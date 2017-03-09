/**
 *
 * Checkbox
 *
 */
import React from "react";
import CustomEmitter from "../../modules/emitter";


class PasswordBox extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props, context) {
    super(props, context);
    this.state = {
      active        : false,
      validClass    : "form-group",
      notValidClass : "form-group has-error",
      class         : "",
      showOrHide    : false,
    };

    this.listener = new CustomEmitter();
  }

  set_state(new_state) {
    this.setState({active: true});
  }

  componentWillMount() {
    this.setState({class: this.state.validClass});
    console.log("this.This: ", this.props.labelClass);
  }

  componentWillReceiveProps(nextProps){ 
    // let value = this.refs.input.value;

    if(nextProps.check == true) {
      if(this.refs.input.value.length == 0) {
        this.setState({class: this.state.notValidClass});
        this.setState({active: false});
      } else {
        var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
        if (re.test(this.refs.input.value) == false) {
          this.setState({class: this.state.notValidClass}); 
          this.setState({active: false});
        } else {
          this.setState({class: this.state.validClass});
          this.setState({active: true});
        } 
      }
    }
  }

  getData() {
    return this.state;
  }

  render() {
    return (
       <div className={this.state.class}>
          <label className={this.props.labelClass == undefined ? 'col-md-4 control-label' : this.props.labelClass}>{this.props.label}</label>  
          <div className={this.props.containClass == undefined ? "col-md-8 inputGroupContainer" : this.props.containClass}>
            <div className="">                        
              <input ref="input" placeholder={this.props.placeholder} className={this.props.nameClass}  type="text" onChange={this.props.change.bind(this)} type="text"/>               
            </div>
          </div>
        </div>
    );
  }  
}

PasswordBox.propTypes = {
  label           : React.PropTypes.string.isRequired,
  placeholder     : React.PropTypes.string,
  change          : React.PropTypes.func.isRequired,
  check           : React.PropTypes.bool.isRequired,
  nameClass       : React.PropTypes.string,
  labelClass      : React.PropTypes.string,
  containClass    : React.PropTypes.string 
};

export default PasswordBox;
