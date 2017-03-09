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
    
    this.listener       = new CustomEmitter();
  }

  set_state(new_state) {
    this.setState({active: true});
  }

  componentWillMount() {
    this.setState({class: this.state.validClass});
    this.setState({type : "password"})
    this.setState({showContent : "Show"})
  }

  componentWillReceiveProps(nextProps){ 
    let count = 0;

    if(nextProps.check == true) {
      if(this.refs.input.value.length == 0) {
        this.setState({class: this.state.notValidClass})
      } else {
        this.setState({class: this.state.validClass})
        
        if (this.refs.input.value.length > 8) {
         this.setState({firstCondition: true});
         
         
        } else {
          this.setState({firstCondition: false});
          count++;
        }

        if (this.refs.input.value.match(/[a-z]/) && this.refs.input.value.match(/[A-Z]/)){
          this.setState({secondCondition: true});
         
          
        } else {
          this.setState({secondCondition: false});
           count++;
        } 
        if (this.refs.input.value.match(/\d/g)) {
          this.setState({thirdCondition: true});
          
          
        } else {
          this.setState({thirdCondition: false});
          count++;
        } 
        if (/^[a-zA-Z0-9- ]*$/.test(this.refs.input.value) == false) {
          this.setState({fourthCondition: true});
          
          
        } else {
          this.setState({fourthCondition: false});
          count++;
        }
      }

      if (count < 4) {
        console.log("PASS Count: ", count);
        this.setState({active: true})
      } else {
        console.log("else: ", count);
        this.setState({active: false})
      }

    } else {

    }
    
    
  }

  // handler declaration
  //return state
  getData() {
    return this.state;
  }
  //About handler
  handleShow(event) {
    console.log("event: ", event);
    if (this.state.isPassword == true) {
      this.setState({isPassword: false});
    } else {
       this.setState({isPassword : true});
    }
  }

  render() {
    return (
       <div className={this.state.class}>
          <label className="col-md-4 control-label">{this.props.label}</label>  
          <div className="col-md-8 inputGroupContainer">
            <div className="">
            {
              this.state.isPassword == false ? 
              <div>
                <input ref="input" placeholder={this.props.placeholder} className={this.props.nameClass} onChange={this.props.change.bind(this)} type="password" />
                <div className="hide-show-password"><a href="#" className="pull-right padding_div" onClick={this.handleShow.bind(this)}> Show </a></div>
              </div>  
              :
              <div>
                <input ref="input" placeholder={this.props.placeholder} className="form-control" onChange={this.props.change.bind(this)} type="text" />
                <div className="hide-show-password"><a href="#" className="pull-right padding_div" onClick={this.handleShow.bind(this)}> Hide </a></div>
              </div>
            } 
              <div>
              {
                  this.state.showOrHide == false ?
                    <div className="validationAll">
                      <div className={this.state.firstCondition ? 'soft_green' : ''}>
                        <label>
                          {this.state.firstCondition ? <span className="glyphicon glyphicon-ok"></span>  : <span className="glyphicon glyphicon-remove"></span>}                          
                          &nbsp;&nbsp;Use 8 or more characters
                        </label>
                      </div>
                      <div className={this.state.secondCondition ? 'soft_green' : ''}>
                        <label> 
                            {this.state.secondCondition ? <span className="glyphicon glyphicon-ok"></span>  : <span className="glyphicon glyphicon-remove"></span>}                          
                           &nbsp;&nbsp;Use upper and lower case letters
                        </label>
                       </div>
                       <div className={this.state.thirdCondition ? 'soft_green' : ''}> 
                          <label>
                            {this.state.thirdCondition ? <span className="glyphicon glyphicon-ok"></span>  : <span className="glyphicon glyphicon-remove"></span>}                          
                             &nbsp;&nbsp;Use a number
                          </label>
                        </div>
                        <div className={this.state.fourthCondition ? 'soft_green' : ''}>  
                          <label> 
                          {this.state.fourthCondition ? <span className="glyphicon glyphicon-ok"></span>  : <span className="glyphicon glyphicon-remove"></span>}                          
                          &nbsp;&nbsp;Use a symbol (e.g. $#&%)
                          </label>
                        </div>  
                    </div>                  
                  :
                  ""  
              }
              
              </div>
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
