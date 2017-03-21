import React, {
  Component,
  PropTypes
}                             from 'react';
import {
  NavigationBar,
  BackToTop
}                             from '../../components';
import HeaderBox              from '../../components/HeaderBox';
import FooterBox              from '../../components/FooterBox';
import ModalBox               from '../../components/ModalBox';
import navigationModel        from '../../models/navigation.json';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as viewsActions      from '../../redux/modules/views';
import * as eventActions      from '../../redux/modules/event';

class LoginContainer extends Component {

  state = {
    navModel : navigationModel
  };

  render() {
    const { navModel } = this.state;
    const { children } = this.props;
    return (
    	<section>
        <HeaderBox></HeaderBox>
        {children}
      </section>
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
LoginContainer.propTypes = {
  children:   PropTypes.node,
  history:    PropTypes.object,
  location:   PropTypes.object,
  actions:    PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    currentView:  state,
    filter: state,
  };
};

// "bindActionCreators" use-case is to pass dispatch to "store non aware children components" (but I feel like it is a good habbit to use it everytime)
const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        ...viewsActions,
        ...eventActions,
      },
      dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
