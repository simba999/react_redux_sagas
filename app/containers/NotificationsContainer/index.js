/*
 *
 * NotificationsContainer
 *
 */
import React from "react";
import {connect} from "react-redux";
import selectNotificationsContainer from "./selectors";
export class NotificationsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('notifications')
    return (
      <aside className="notifications">
        <ul>

        </ul>
      </aside>

    );
  }
}
//<li className="overlay-e">File Could Not be deleted. Please Try Again.<div className={cx('fit','a')}></div><div className={cx('fit','b')}></div></li>
const mapStateToProps = selectNotificationsContainer();
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
