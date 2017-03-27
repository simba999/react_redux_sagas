import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import { Profile }            from '../../views';


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
    enterHome: (url) => 
      {
        switch(url) {
          case 'dashboard':
            dispatch(viewsActions.enterHome());
            break;
          case 'opencase':
            dispatch(viewsActions.enterOpenCase());
            break;
          default:
            break;
        }
      },
    leaveHome: () => dispatch(viewsActions.leaveHome()),
    clickMenu: () => dispatch(viewsActions.clickMenu())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
