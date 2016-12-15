/*
 *
 * StatisticsPage
 *
 */
import React from "react";
import {connect} from "react-redux";
import selectStatisticsPage from "./selectors";
import {Link} from "react-router";
import elementClass from "element-class";


export class StatisticsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
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

    console.log('statistic page render')


    return (
      <section id="content">
        <div className="tabs-b a">
          <ul>
            <li className={this.props.location.pathname == '/statistics/income' ? 'active' : ''}><Link
              to="/statistics/income">Income</Link></li>
            <li className={this.props.location.pathname == '/statistics/by_country' ? 'active' : ''}><Link
              to="/statistics/by_country">Traffic by Countries</Link></li>
          </ul>

          <div>
            {React.Children.toArray(this.props.children)}
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = selectStatisticsPage();
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(StatisticsPage);
