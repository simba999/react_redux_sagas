import React 						from 'react';
import {Link}           from "react-router";
import cx               from "classnames";
import Gravatar         from "react-gravatar";

class HeaderBox extends React.Component {
	constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {

  }

  render() {
  	return (
  		<header>
	      <div id="top">
	        <div className="sub_up">
	          <p id="logo"><Link to="/dashboard"></Link></p>
	          <nav id="user">
	            <ul>
	              <li className={cx('online', 'sub')}><Link to="/signup">Sign up </Link> &nbsp;&nbsp;| &nbsp;
	              </li>
	              <li className={cx('online', 'sub')}><Link to="/signin">Sign In </Link>
	              </li>
	            </ul>
	          </nav>
	        </div>
	      </div>
	    </header>
  		);
  }

}

HeaderBox.propTypes = {}

export default HeaderBox;