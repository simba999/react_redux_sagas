/**
 *
 * Checkbox
 *
 */
import React from "react";
import classNames from "classnames";
class Checkbox extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props, context) {
    super(props, context);
    this.state = {
      active: false
    };
  }

  set_state(new_state) {
    this.setState({active: new_state});
    this.props.handler(new_state);
  }

  click_handler() {
    this.set_state(!this.state.active);
  }

  render() {
    console.log('draw checkbox')
    return (
      <label htmlFor="tba" className={classNames('checkbox', 'has-check', this.get_state_class())}
             onClick={this.click_handler.bind(this)}>
        <div className='input'/>
      </label>
    );
  }

  get_state_class() {
    if (this.state.active) {
      return 'active';
    } else {
      return;
    }
  }
}
Checkbox.propTypes = {
  handler: React.PropTypes.func.isRequired,
};
export default Checkbox;
