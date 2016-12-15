/*
 *
 * StatisticsIncome
 *
 */
import React from "react";
import {connect} from "react-redux";
import {selectStatisticsIncome, selectChart} from "./selectors";
import RangeSelector from "components/RangeSelector";
import DataPicker from "components/DataPicker";
import LineChart from "components/LineChart";
// import Loader from 'react-loader-advanced';
import StatisticsIncomeDetailsItem from 'components/StatisticsIncomeDetailsItem';
import {updateChartAction} from "./actions";


export class StatisticsIncome extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount()
  {
    console.log('will mount');
  }

  selectRange(range) {
    this.props.updateChartAction(range);
  }

  render() {
    console.log('StatisticsIncome');

    const spinner = <span className="elementLoading"><span><span className="a"></span><span className="b"></span><span className="c"></span><span className="d"></span></span></span>;


    return (
      <article>
        <p>Paid view <span className="overlay-g">vs</span> Non Paid view</p>
        <form className="form-d">
          <p>


            <DataPicker defaultValue="From"/>
            <DataPicker defaultValue="To"/>
          </p>
          <RangeSelector selected="daily" onDataChange={this.selectRange.bind(this)}/>
        </form>
        <LineChart chart={this.props.chart}/>
        <ul className="list-i">
          <li className="overlay-f">Paid View</li>
          <li className="overlay-e">Non Paid View</li>
        </ul>
        <table className="table-a">
          <thead>
          <tr>
            <th>Date</th>
            <th>Paid Views</th>
            <th>None Paid Views</th>
            <th>Revenue ($)</th>
          </tr>
          </thead>
          <tbody>


          { Object.keys(this.props.page.details).map((k, index) => <StatisticsIncomeDetailsItem key={index} data={this.props.page.details[k]} />) }

          </tbody>
        </table>

      </article>
    );
  }
}
const mapStateToProps = function(state) {
  return {
    page: selectStatisticsIncome(state),
    chart: selectChart(state),
  }
}
function mapDispatchToProps(dispatch) {
  return {
    updateChartAction: (range) => dispatch(updateChartAction(range)),
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(StatisticsIncome);
