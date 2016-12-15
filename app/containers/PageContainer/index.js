/*
 *
 * PageContainer
 *
 */
import React from "react";
import {connect} from "react-redux";
import selectPageContainer from "./selectors";
import cx from "classnames";
import Gravatar from "react-gravatar";
import {Link} from "react-router";
export class PageContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log('page container render')
    return (
      <div>
        <header id="top">
          <p id="logo"><Link to="/dashboard">MyStream</Link></p>
          <nav id="user">
            <ul>
              <li className={cx('online', 'sub')}><span className="img"><Gravatar
                email="dan@zlogic.ru"/></span> Denis Shirokov
                <ul>
                  <li><a href="http://stream.rexuni.com/?op=logout">Logout</a></li>
                  <li><Link to="/settings">Settings</Link></li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>
        <nav className="aside">
          <ul>
            <li className={this.props.location.pathname == '/dashboard' ? 'active' : ''}><Link to="/dashboard"><i
              className="icon-pie-chart"></i> <span>Dashboard</span></Link></li>
            <li className={this.props.location.pathname == '/video-manager' ? 'active' : ''}><Link
              to="/video-manager"><i className="icon-triangle-outline-right"></i> <span>Video Manager</span></Link></li>
            <li className={this.props.location.pathname == '/remote-upload' ? 'active' : ''}><Link
              to="/remote-upload"><i className="icon-upload"></i> <span>Remote Upload</span></Link></li>
            <li className={this.props.location.pathname == '/multiple-upload' ? 'active' : ''}><Link
              to="/multiple-upload"><i className="icon-upload-cloud2"></i> <span>Multiple Upload</span></Link></li>
            <li className={this.props.location.pathname == '/settings' ? 'active' : ''}><Link to="/settings"><i
              className="icon-cog"></i> <span>Settings</span></Link></li>
            <li className={this.props.location.pathname == '/statistics' ? 'active' : ''}><Link to="/statistics/income"><i
              className="icon-graphs"></i> <span>Statistics</span></Link></li>
          </ul>
        </nav>
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
