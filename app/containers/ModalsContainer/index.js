/*
 *
 * ModalsContainer
 *
 */
import React from "react";
import {connect} from "react-redux";
import selectModalsContainer from "./selectors";
import cx from "classnames";
import elementClass from "element-class";
import {shallowEqualImmutable} from "react-immutable-render-mixin";

export class ModalsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    elementClass(document.documentElement).add('popup-shown');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // update only if something changed
    return !shallowEqualImmutable(this.props.chart, nextProps.chart);
  }


  getLoaderClasses() {
    if (this.props.loading) {
      return cx('loading');
    } else {
      return cx('loading', 'hidden_loader');
    }
  }

  render() {
    console.log('show modal')
    return (
      <div>

        <span className={this.getLoaderClasses()} ref="loading" id="loading">
          <span>
            <span className="a"></span>
            <span className="b"></span>
            <span className="c"></span>
            <span className="d"></span>
          </span>
        </span>


        {/* create folder */}
        <form action="./" method="post" className={cx('popup-a')} title="edit-file">
          <div className="box-outer">
            <div className="box-inner">
              <div className="box-inset">

                <h2>Edit File</h2>
                <p>
                  <label htmlFor="paa">Label</label>
                  <input type="text" id="paa" name="paa"/>
                </p>
                <p>
                  <button type="submit">Update</button>
                  <button type="reset">Clear</button>
                </p>


              </div>

            </div>

            <a className="close">Close</a>
          </div>
        </form>


        {/* edit file */}
        <form action="./" method="post" className={cx('popup-a')} title="edit-file">
          <div className="box-outer">
            <div className="box-inner">
              <div className="box-inset">

                <h2>Edit File</h2>
                <p>
                  <label htmlFor="paa">Label</label>
                  <input type="text" id="paa" name="paa"/>
                </p>
                <p>
                  <button type="submit">Update</button>
                  <button type="reset">Clear</button>
                </p>


              </div>

            </div>

            <a className="close">Close</a>
          </div>
        </form>


      </div>
    );
  }
}
const mapStateToProps = selectModalsContainer();
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalsContainer);
