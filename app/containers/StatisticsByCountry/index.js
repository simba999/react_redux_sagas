/*
 *
 * StatisticsByCountry
 *
 */
import React from "react";
import {connect} from "react-redux";
import selectStatisticsByCountry from "./selectors";
export class StatisticsByCountry extends React.Component { // eslint-disable-line react/prefer-stateless-function
  positionStyle(left, top) {
    return {
      top: top + '%',
      left: left + '%'
    }
  }

  render() {
    return (
      <article>
        <div className="map-a">
          <ul>
            <li style={this.positionStyle(25, 25)}>
              <a href="./">Anchorage</a>
              <div>
                <h3>Anchorage</h3>
                <ul>
                  <li><span>Views:</span> 05</li>
                  <li><span>Country:</span> India</li>
                </ul>
              </div>
            </li>
            <li style={this.positionStyle(50, 25)}>
              <a href="./">Oslo</a>
              <div>
                <h3>Oslo</h3>
                <ul>
                  <li><span>Views:</span> 05</li>
                  <li><span>Country:</span> India</li>
                </ul>
              </div>
            </li>
            <li style={this.positionStyle(75, 25)}>
              <a href="./">Petropavlovsk-Kamchatsky</a>
              <div>
                <h3>Petropavlovsk-Kamchatsky</h3>
                <ul>
                  <li><span>Views:</span> 05</li>
                  <li><span>Country:</span> India</li>
                </ul>
              </div>
            </li>
            <li style={this.positionStyle(25, 50)}>
              <a href="./">Pokharan</a>
              <div>
                <h3>Pokharan</h3>
                <ul>
                  <li><span>Views:</span> 05</li>
                  <li><span>Country:</span> India</li>
                </ul>
              </div>
            </li>
            <li style={this.positionStyle(50, 50)}>
              <a href="./">Pokharan</a>
              <div>
                <h3>Pokharan</h3>
                <ul>
                  <li><span>Views:</span> 05</li>
                  <li><span>Country:</span> India</li>
                </ul>
              </div>
            </li>
            <li style={this.positionStyle(75, 50)}>
              <a href="./">Pokharan</a>
              <div>
                <h3>Pokharan</h3>
                <ul>
                  <li><span>Views:</span> 05</li>
                  <li><span>Country:</span> India</li>
                </ul>
              </div>
            </li>
            <li style={this.positionStyle(25, 75)}>
              <a href="./">Pokharan</a>
              <div>
                <h3>Pokharan</h3>
                <ul>
                  <li><span>Views:</span> 05</li>
                  <li><span>Country:</span> India</li>
                </ul>
              </div>
            </li>
            <li style={this.positionStyle(50, 75)}>
              <a href="./">Pokharan</a>
              <div>
                <h3>Pokharan</h3>
                <ul>
                  <li><span>Views:</span> 05</li>
                  <li><span>Country:</span> India</li>
                </ul>
              </div>
            </li>
            <li style={this.positionStyle(75, 75)}>
              <a href="./">Pokharan</a>
              <div>
                <h3>Pokharan</h3>
                <ul>
                  <li><span>Views:</span> 05</li>
                  <li><span>Country:</span> India</li>
                </ul>
              </div>
            </li>
          </ul>
          <figure><img src="images/map.svg" alt="Map" width="1011" height="498"/></figure>
        </div>
        <div className="triple">
          <ul className="list-g">
            <li><span>Aruba</span> <span>94%</span></li>
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
    );
  }
}
const mapStateToProps = selectStatisticsByCountry();
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(StatisticsByCountry);
