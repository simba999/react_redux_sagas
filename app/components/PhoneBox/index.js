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
      firstCondition: false,
      secondCondition: false,
      thirdCondition: false,
      fourthCondition: false
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
    // let value = this.refs.input.value;

    if(nextProps.check == true) {
      if(this.refs.input.value.length == 0) {
        this.setState({class: this.state.notValidClass})
      } else {
        this.setState({class: this.state.validClass})
        var re = /^((((\(\d{3}\))|(\d{3}-))\d{3}-\d{4})|(\+?\d{2}((-| )\d{1,8}){1,5}))(( x| ext)\d{1,5}){0,1}$/;
        if (re.test(this.refs.input.value) == false){
          this.setState({class: this.state.notValidClass});
          this.setState({active: false});
        }  else {
          this.setState({class: this.state.validClass});
          this.setState({active: true});
        } 
      }
    }
  }

  render() {
    return (
       <div className={this.state.class}>
          <label className="col-md-4 control-label">{this.props.label}</label>  
          <div className="col-md-8 inputGroupContainer">
            <div className="">                        
              <input ref="input" placeholder={this.props.placeholder} className={this.props.nameClass}  type="text" onChange={this.props.change.bind(this)} type="text"/>               
            </div>
          </div>
        </div>
    );
  }  
}

PasswordBox.propTypes = {
  label       : React.PropTypes.string.isRequired,
  placeholder : React.PropTypes.string,
  change      : React.PropTypes.func.isRequired,
  check       : React.PropTypes.bool.isRequired,
  nameClass   : React.PropTypes.string
};

export default PasswordBox;
