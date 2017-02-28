/*
 *
 * PageContainer
 *
 */
import React                      from "react";
import {connect}                  from "react-redux";
import selectPageContainer        from "./selectors";
import cx                         from "classnames";
import Gravatar                   from "react-gravatar";
import {Link}                     from "react-router";
import HeaderBox                  from '../../components/HeaderBox';

export class PageContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('page container render')
    return (
      <div>
        <HeaderBox></HeaderBox>
        
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}
const mapStateToProps = selectPageContainer();
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);
