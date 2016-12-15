/*
 *
 * UploadsContainer
 *
 */
import React from "react";
import {connect} from "react-redux";
import selectUploadsContainer from "./selectors";
import {containerMountedAction} from "./actions";
export class UploadsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.container_mounted();
  }

  render() {
    console.log('uploads container render')
    return (
      <div id="upload_container"/>
    );
  }
}
const mapStateToProps = selectUploadsContainer();
function mapDispatchToProps(dispatch) {
  return {
    container_mounted: () => dispatch(containerMountedAction()),
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UploadsContainer);
