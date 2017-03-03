import { connect }                from 'react-redux';
import { bindActionCreators }     from 'redux';
import * as viewsActions          from '../../redux/modules/views';
import { OpenCase }               from '../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      enterOpenCase: viewsActions.enterOpenCase,
      leaveOpenCase: viewsActions.leaveOpenCase
    },
    dispatch
  );
};

/*
  without bindActionCreators:
 */
// const mapDispatchToProps = (dispatch) => {
//   return {
//     enterOpenCase: () => dispatch(viewsActions.enterOpenCase()),
//     leaveOpenCase: () => dispatch(viewsActions.leaveOpenCase())
//   };
// };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(OpenCase);
