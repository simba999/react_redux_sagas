/**
*
* LineChart
*
*/

import React from 'react';
import {Line} from 'react-chartjs-2';
import {shallowEqualImmutable} from "react-immutable-render-mixin";

class LineChart extends React.Component { // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate(nextProps, nextState) {
    // update only if something changed
    console.log(this.props.chart, nextProps.chart)
    console.log(shallowEqualImmutable(this.props.chart, nextProps.chart));
    return !shallowEqualImmutable(this.props.chart, nextProps.chart);
  }

  render() {
  console.log('linechart render')
    const options = {

      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      scales: {
        xAxes: [ {
          gridLines: {
            display: false
          }
        } ],
        yAxes: [ {
          gridLines: {
            color: '#272c40',
            drawOnChartArea: true,
            drawBorder: false,
            drawTicks: false,
            zeroLineColor: '#41475f'
          },
          ticks: {
            suggestedMin: 0,
            // stepSize: 100,
            // suggestedMax: 1500
          }
        } ]
      }
    };

    const data =  {
      labels: this.props.chart.labels,
      datasets: [
        {
          data: this.props.chart.views,
          fill: false,
          lineTension: 0.1,
          borderWidth: 2,
          borderColor: '#d61459',
          borderDash: [],
          borderJoinStyle: 'miter',
          pointBorderColor: '#d61459',
          pointBackgroundColor: "#d61459",
          pointBorderWidth: 1,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: '#d61459',
          pointHoverBorderColor: '#771743',
          pointHoverBorderWidth: 5,
          pointRadius: .5,
          pointHitRadius: 10,
          spanGaps: false
        }, {
          data: this.props.chart.paid_views,
          fill: false,
          lineTension: 0.1,
          borderWidth: 2,
          borderColor: '#34b984',
          borderDash: [],
          borderJoinStyle: 'miter',
          pointBorderColor: '#34b984',
          pointBackgroundColor: "#34b984",
          pointBorderWidth: 1,
          pointHoverRadius: 8,
          pointHoverBackgroundColor: '#34b984',
          pointHoverBorderColor: '#267750',
          pointHoverBorderWidth: 5,
          pointRadius: .5,
          pointHitRadius: 10,
          spanGaps: false
        }
      ]
    };


    return (
      <Line options={options} data={data} width={1216} height={274} />
    );
  }
}

export default LineChart;
