import { connect }                from 'react-redux';
import { bindActionCreators }     from 'redux';
import * as viewsActions          from '../../redux/modules/views';
import  CloseClaim              from '../../views/closeclaim/CloseClaim';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      enterCloseClaim: viewsActions.enterCloseClaim,
      leaveCloseClaim: viewsActions.leaveCloseClaim
    },
    dispatch
  );
};

/*
  without bindActionCreators:
 */
// const mapDispatchToProps = (dispatch) => {
//   return {
//     enterCloseClaim: () => dispatch(viewsActions.enterCloseClaim()),
//     leaveCloseClaim: () => dispatch(viewsActions.leaveCloseClaim())
//   };
// };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CloseClaim);
