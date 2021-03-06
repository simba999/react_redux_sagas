import React, {
  Component,
  PropTypes
}                             from 'react';
import {
  NavigationBar,
  BackToTop
}                             from '../../components';
import NavbarBox1              from '../../components/NavbarBox1';
import FooterBox              from '../../components/FooterBox';
import ModalBox               from '../../components/ModalBox';
import navigationModel        from '../../models/navigation.json';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as viewsActions      from '../../redux/modules/views';

class UserLayout extends Component {

  state = {
    navModel : navigationModel
  };

  render() {
    const { navModel } = this.state;
    const { children } = this.props;
    return (
      <div id="appContainer">
        <NavbarBox1></NavbarBox1>
          {children}
        <FooterBox></FooterBox>
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
UserLayout.propTypes = {
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
)(UserLayout);
