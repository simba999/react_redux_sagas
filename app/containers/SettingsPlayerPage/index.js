/*
 *
 * SettingsPlayerPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectSettingsPlayerPage from './selectors';

export class SettingsPlayerPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
    <article>
    <form action="./" method="post">
      <h2 className="size-b overlay-b mb-b">Current Logo</h2>
      <figure className="image-b"><img src="http://placehold.it/200x60" alt="Placeholder" width="200" height="60" /></figure>
      <p className="link-a c">
      <a href="./" className="a">Remove</a>
      <label htmlFor="laa"><input type="file" id="laa" name="laa" /> Upload</label>
      </p>
      <h2 className="size-b overlay-b">Video Screenshot</h2>
      <ul className="list-l">
      <li><label htmlFor="lca"><input type="radio" id="lca" name="ll" /> <img src="http://placehold.it/848x292" alt="Placeholder" width="848" height="292" /></label> Splash Screenshot</li>
      <li><label htmlFor="lcb"><input type="radio" id="lcb" name="ll" /> <img src="http://placehold.it/848x292" alt="Placeholder" width="848" height="292" /></label> Normal Screenshot</li>
      </ul>
    </form>
    </article>
    );
  }
}

const mapStateToProps = selectSettingsPlayerPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPlayerPage);
