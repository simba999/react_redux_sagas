import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import { Password }           from '../../views';


const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(
//     {
//       enterHome: viewsActions.enterHome,
//       leaveHome: viewsActions.leaveHome,
//       clickMenu: viewsActions.clickMenu
//     },
//     dispatch
//   );
// };

/*
  without bindActionCreators:
 */
const mapDispatchToProps = (dispatch) => {
  return {
    enterHome: () => dispatch(viewsActions.enterHome()),
    leaveHome: () => dispatch(viewsActions.leaveHome()),
    clickMenu: () => dispatch(viewsActions.clickMenu())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Password);
