/**
 *
 * Checkbox
 *
 */
import React from "react";
import CustomEmitter from "../../modules/emitter";


class InputBox2 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props, context) {
    super(props, context);
    this.state = {
      active        : false,
      validClass    : "form-group",
      notValidClass : "form-group has-error",
      class         : "",
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
    if(nextProps.check == true) {
      console.log("************************************************");
      if(this.refs.input.value.length == 0) {
        this.setState({class: this.state.notValidClass});
        this.setState({active: false});
      } else {
        console.log("++++++++++++++++++++++++++++++++++++++++++++++");
        this.setState({class: this.state.validClass});
        this.setState({active: true});
      }
    }
  }

  getData() {
    return this.state;
  }

  render() {
    return (
       <div className={this.state.class}>
          <label className="col-md-4 control-label">{this.props.label}</label>  
          <div className="col-md-8 inputGroupContainer">
            <div className="">                        
                <input ref="input"  name="first_name" placeholder={this.props.placeholder} className={this.props.nameClass}  type="text" onChange={this.props.change.bind(this)}/>                         
            </div>
          </div>
        </div>
    );
  }  
}

InputBox2.propTypes = {
  label       : React.PropTypes.string.isRequired,
  placeholder : React.PropTypes.string,
  change      : React.PropTypes.func.isRequired,
  check       : React.PropTypes.bool.isRequired,
  nameClass   : React.PropTypes.string
};

export default InputBox2;
