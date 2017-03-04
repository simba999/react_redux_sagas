import { connect }                from 'react-redux';
import { bindActionCreators }     from 'redux';
import * as viewsActions          from '../../redux/modules/views';
import  Reports                   from '../../views/reports/Reports';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      enterReports: viewsActions.enterReports,
      leaveReports: viewsActions.leaveReports
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
  )(Reports);
