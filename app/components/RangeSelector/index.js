/**
 *
 * RangeSelector
 *
 */
import React from "react";
class RangeSelector extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected
    };
  }

  click_handler(range) {
    if (range != this.state.selected) {
      this.setState({selected: range})
      this.props.onDataChange(range);
    }
  }

  get_class(range) {
    if (range == this.state.selected) {
      return 'active';
    } else {
      return '';
    }
  }

  render() {
    return (
      <ul className="list-f">
        <li onClick={() => this.click_handler('daily')}><label className={this.get_class('daily')} htmlFor="lfa"><input
          type="radio" id="lfa" name="lf"/> Daily</label></li>
        <li onClick={() => this.click_handler('weekly')}><label className={this.get_class('weekly')} htmlFor="lfb"><input
          type="radio" id="lfb" name="lf"/> Weekly</label></li>
        <li onClick={() => this.click_handler('monthly')}><label className={this.get_class('monthly')} htmlFor="lfc"><input
          type="radio" id="lfc" name="lf"/> Monthly</label></li>
      </ul>
    );
  }
}
RangeSelector.propTypes = {
  selected: React.PropTypes.string.isRequired,
  onDataChange: React.PropTypes.func.isRequired,
};
export default RangeSelector;
