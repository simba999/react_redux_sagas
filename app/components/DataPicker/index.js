/**
 *
 * DataPicker
 *
 */
import React from "react";
import ReactDom from "react-dom";
class DataPicker extends React.Component { // eslint-disable-line react/prefer-stateless-function
  _initDatePicker() {
    const element = ReactDom.findDOMNode(this.refs.input);
    $(element).datepicker(this.props);
  }

  _destroyDatePicker() {
    const element = ReactDom.findDOMNode(this.refs.input);
    $(element).datepicker('destroy');
  }

  componentDidMount() {
    this._initDatePicker();
  }

  componentWillReceiveProps(props) {
    this._destroyDatePicker();
  }

  componentDidUpdate() {
    this._initDatePicker();
  }

  componentWillUnmount() {
    this._destroyDatePicker();
  }

  render() {
    return (
      <span className="input-date"><input ref="input" type="text" {...this.props}/></span>
    );
  }
}
export default DataPicker;
