/*
 *
 * StatisticsIncome reducer
 *
 */
import { fromJS } from "immutable";
import { LOADED_CHART_ACTION, LOADING_CHART_ACTION } from "./constants";
const initialState = fromJS( {
  chart_loading: true,
  chart: {
    labels: [],
    paid_views: [],
    views: [],
  },
  details: []
} );
function statisticsIncomeReducer( state = initialState, action ) {
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
        } ),
        details: fromJS(action.data.details),
      } );
    default:
      return state;
  }
}
export default statisticsIncomeReducer;
