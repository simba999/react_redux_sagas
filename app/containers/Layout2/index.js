/**
 *
 * Layout2.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */
import React from "react";
export default class Layout2 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    console.log('app constructor')
    super(props);
    // Set up initial state
    // Functions must be bound manually with ES6 classes
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  static propTypes = {
    children2: React.PropTypes.node,
  };

  render() {
    console.log('app render')
    return (
      <div id="root2">
   
        {this.props.page}

      </div>
    );
  }
}
