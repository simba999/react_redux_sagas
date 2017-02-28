/*
 *
 * LoginPage
 *
 */
import React from "react";
import {connect} from "react-redux";
import {selectLoginPage, selectChart} from "./selectors";
import elementClass from "element-class";
import RangeSelector from "components/RangeSelector";
import cx from "classnames";
import Progress from "components/Progress";
import LineChart from "components/LineChart";
import {updateChartAction} from "./actions";
import Datamap from "components/Datamap";
// import Loader from 'react-loader-advanced';




export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    elementClass(document.documentElement).add('a');
    elementClass(document.documentElement).add('b');
  }

  componentWillUnmount() {
    elementClass(document.documentElement).remove('a');
    elementClass(document.documentElement).remove('b');
  }

  get_style(left, top) {
    return {
      left: left + '%',
      top: top + '%'
    }
  }

  selectRange(range) {
    this.props.updateChartAction(range);
  }

  render() {
    console.log('Login page render')
    const mystyle = {'height': '500px'};


    const spinner = <span className="elementLoading"><span><span className="a"></span><span className="b"></span><span className="c"></span><span className="d"></span></span></span>;


    return (<div></div>);
  }
}
LoginPage.propTypes = {
  defaultAction: React.PropTypes.func,
};
// const mapStateToProps = selectLoginPage();

const mapStateToProps = function(state) {
  return {
    page: selectLoginPage(state),
    chart: selectChart(state),
  }
}


function mapDispatchToProps(dispatch) {
  return {
    updateChartAction: (range) => dispatch(updateChartAction(range)),
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
