/*
 *
 * DashboardPage reducer
 *
 */
import { fromJS } from "immutable";
import { LOADING_CHART_ACTION, LOADED_CHART_ACTION } from "./constants";
const initialState = fromJS( {
  balance: '99.528',
  storage_current: '3gb',
  storage_total: '4gb',
  chart_loading: true,
  chart: {
    labels: [],
    paid_views: [],
    views: [],
  },
  username: '',
} );
function dashboardPageReducer( state = initialState, action ) {
  switch ( action.type ) {
    case LOADING_CHART_ACTION:
      return state.set( 'chart_loading', true );
    case LOADED_CHART_ACTION:
      return state.merge( {
        chart_loading: false,
        chart: fromJS( {
          labels: action.data.labels,
          views: action.data.views,
          paid_views: action.data.paid_views,
        } )
      } );
    default:
      return state;
  }
}
export default dashboardPageReducer;
