/*
 *
 * SettingsPage
 *
 */
import React from "react";
import {connect} from "react-redux";
import selectSettingsPage from "./selectors";
import elementClass from "element-class";
import {Link} from "react-router";

export class SettingsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    elementClass(document.documentElement).add('a');
    elementClass(document.documentElement).add('b');
    elementClass(document.documentElement).add('c');
  }

  componentWillUnmount() {
    elementClass(document.documentElement).remove('a');
    elementClass(document.documentElement).remove('b');
    elementClass(document.documentElement).remove('c');
  }

  render() {
    return (
      <section id="content">
        <div className="tabs-b a">
          <ul>
            <li className={this.props.location.pathname == '/settings/account' ? 'active' : ''}><Link
              to="/settings/account">Account Settings</Link></li>
            <li className={this.props.location.pathname == '/settings/affiliation' ? 'active' : ''}><Link
              to="/settings/affiliation">Affiliation Settings</Link></li>
            <li className={this.props.location.pathname == '/settings/player' ? 'active' : ''}><Link
              to="/settings/player">Player Settings</Link></li>
          </ul>

          <div>
            {React.Children.toArray(this.props.children)}
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = selectSettingsPage();
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
