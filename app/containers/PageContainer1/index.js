/*
 *
 * PageContainer1
 *
 */
import React from "react";
import {connect} from "react-redux";
import selectPageContainer1 from "./selectors";
import cx from "classnames";
import Gravatar from "react-gravatar";
import {Link} from "react-router";
export class PageContainer1 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('page container render')
    return (
      <div>
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}
const mapStateToProps = selectPageContainer1();
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PageContainer1);
