/*
 *
 * DashboardPage
 *
 */
import React from "react";
import {connect} from "react-redux";
import {selectDashboardPage, selectChart} from "./selectors";
import elementClass from "element-class";
import RangeSelector from "components/RangeSelector";
import cx from "classnames";
import Progress from "components/Progress";
import LineChart from "components/LineChart";
import {updateChartAction} from "./actions";
import Datamap from "components/Datamap";
// import Loader from 'react-loader-advanced';




export class DashboardPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
    console.log('dashboard page render')
    const mystyle = {'height': '500px'};


    const spinner = <span className="elementLoading"><span><span className="a"></span><span className="b"></span><span className="c"></span><span className="d"></span></span></span>;


    return (
      <section id="content">
        <ul className="list-e">
          <li>Account Balance<br /> <span>${this.props.page.balance} <span>000</span></span></li>
          <li>Total Storage<br /> <span>{this.props.page.storage_current} <span>/{this.props.page.storage_total}</span></span></li>
        </ul>
        <article className="module-b a">
          <h2>Video View Graph</h2>
            <RangeSelector selected="daily" onDataChange={this.selectRange.bind(this)}/>
            <LineChart chart={this.props.chart}/>
        </article>
        <article className="module-b">
          <h2>Visitors Origin</h2>
          <div style={mystyle}>
            <Datamap fills={{
              MEDIUM: 'blue',
              defaultFill: '#2a3044',
              authorHasTraveledTo: '#fa0fa0'
            }} data={{

              USA: {
                fillKey: 'MEDIUM',
                numberOfThings: 10381
              }

            }}    geographyConfig={{borderWidth: 0}} />
          </div>
          <div className="triple">
            <ul className="list-g">
              <li><span>Aruba</span> <span>94%</span>
                <div className={cx('fit', 'a')}><Progress progress={94}/></div>
              </li>
              <li><span>Albania</span> <span>52%</span></li>
              <li><span>Algeria</span> <span>78%</span></li>
              <li><span>Andorra</span> <span>89%</span></li>
              <li><span>Angola</span> <span>65%</span></li>
            </ul>
            <ul className="list-g">
              <li><span>Belarus</span> <span>94%</span></li>
              <li><span>Belgium</span> <span>52%</span></li>
              <li><span>Belize</span> <span>78%</span></li>
              <li><span>Benin</span> <span>89%</span></li>
              <li><span>Bhutan</span> <span>65%</span></li>
            </ul>
            <ul className="list-g">
              <li><span>Chad</span> <span>94%</span></li>
              <li><span>Chile</span> <span>52%</span></li>
              <li><span>China</span> <span>78%</span></li>
              <li><span>Colombia</span> <span>89%</span></li>
              <li><span>Comoros</span> <span>65%</span></li>
            </ul>
          </div>
        </article>
        <article className="module-b">
          <h2>Uploaded Videos</h2>
          <p className="drop-a">
            <label htmlFor="daa" className="hidden">Sort by:</label>
            <select id="daa" name="daa">
              <option>Newest</option>
              <option>Most Viewed</option>
              <option>Most Downloaded</option>
            </select>
          </p>
          <ul className="list-h">
            <li><a href="./"><span className="img"><img src="http://placehold.it/285x200" alt="Placeholder" width="285"
                                                        height="200"/></span> Sed ut perspiciatis
              <span>01:05s</span></a></li>
            <li><a href="./"><span className="img"><img src="http://placehold.it/285x200" alt="Placeholder" width="285"
                                                        height="200"/></span> Sed ut perspiciatis
              <span>01:05s</span></a></li>
            <li><a href="./"><span className="img"><img src="http://placehold.it/285x200" alt="Placeholder" width="285"
                                                        height="200"/></span> Sed ut perspiciatis
              <span>01:05s</span></a></li>
            <li><a href="./"><span className="img"><img src="http://placehold.it/285x200" alt="Placeholder" width="285"
                                                        height="200"/></span> Sed ut perspiciatis
              <span>01:05s</span></a></li>
          </ul>
        </article>
      </section>
    );
  }
}
DashboardPage.propTypes = {
  defaultAction: React.PropTypes.func,
};
// const mapStateToProps = selectDashboardPage();

const mapStateToProps = function(state) {
  return {
    page: selectDashboardPage(state),
    chart: selectChart(state),
  }
}


function mapDispatchToProps(dispatch) {
  return {
    updateChartAction: (range) => dispatch(updateChartAction(range)),
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
