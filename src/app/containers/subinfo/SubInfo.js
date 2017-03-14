import React, {
  Component,
  PropTypes
}                             from 'react';
import {
  NavigationBar,
  BackToTop
}                             from '../../components';
import { Link }               from 'react-router';
import ChartBox               from '../../components/ChartBox';
import LeftSideBox            from '../../components/LeftSideBox';
import ModalBox               from '../../components/ModalBox';
import navigationModel        from '../../models/navigation.json';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as viewsActions      from '../../redux/modules/views';

class SubInfo extends Component {

  state = {
    navModel : navigationModel
  };

  render() {
    const { navModel } = this.state;
    const { children } = this.props;
    return (
      <div className="container info_page">
          <div className="opencase_margin">
            <div className="col-sm-3 left_side_box">
              <LeftSideBox></LeftSideBox>
            </div>
            <div className="col-sm-9">
              {children}
            </div>
          </div>  
        </div>
    );
  }

  handleLeftNavItemClick = (event, viewName) => {
    // something to do here?
  }

  handleRightNavItemClick = (event, viewName) => {
    // something to do here?
  }
}

// statics :
SubInfo.propTypes = {
  children:   PropTypes.node,
  history:    PropTypes.object,
  location:   PropTypes.object,
  actions:    PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    currentView:  state
  };
};

// "bindActionCreators" use-case is to pass dispatch to "store non aware children components" (but I feel like it is a good habbit to use it everytime)
const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        ...viewsActions
      },
      dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubInfo);
