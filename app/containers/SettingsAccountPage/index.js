/*
 *
 * SettingsAccountPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectSettingsAccountPage from './selectors';

export class SettingsAccountPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <form action="./" method="post" className="form-c b">
          <header>
            <h2 className="size-b overlay-b">Profile Details</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei tincididunt ut labore et dolore magna aliqua.</p>
          </header>
          <p className="triple">
									<span>
										<label htmlFor="fcc">First Name</label>
										<input type="text" id="fcc" name="fcc" required />
									</span>
            <span>
										<label htmlFor="fcd">Last Name</label>
										<input type="text" id="fcd" name="fcd" required />
									</span>
          </p>
          <p className="triple">
									<span>
										<label htmlFor="fce">Email Address</label>
										<input type="email" id="fce" name="fce" required />
									</span>
            <span>
										<label htmlFor="fcf">Mobile Number</label>
										<input type="tel" id="fcf" name="fcf" required />
									</span>
          </p>
          <p>
            <button type="reset">Reset</button>
            <button type="submit">Save</button>
          </p>
        </form>
        <form action="./" method="post" className="form-c b">
          <header>
            <h2 className="size-b overlay-b">Change Password</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei tincididunt ut labore et dolore magna aliqua.</p>
          </header>
          <p className="triple">
									<span>
										<label htmlFor="fch">Email address</label>
										<input type="email" id="fch" name="fch" required />
									</span>
            <span>
										<label htmlFor="password">New Password</label>
										<input type="password" id="password" name="password" required />
									</span>
            <span>
										<label htmlFor="repeatpassword">Confirm Password</label>
										<input type="password" id="repeatpassword" name="repeatpassword" required />
									</span>
          </p>
          <p>
            <button type="reset">Reset</button>
            <button type="submit">Change Password</button>
          </p>
        </form>
        <div className="form-c b">
          <header>
            <h2 className="size-b overlay-b">Delete your Account</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei tincididunt ut labore et dolore magna aliqua.</p>
          </header>
          <p className="link-a"><a href="./">Delete</a></p>
        </div>
      </article>
    );
  }
}

const mapStateToProps = selectSettingsAccountPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsAccountPage);
