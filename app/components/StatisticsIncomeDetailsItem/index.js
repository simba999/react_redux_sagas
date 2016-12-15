/**
*
* StatisticsIncomeDetailsItem
*
*/

import React from 'react';



function StatisticsIncomeDetailsItem({data}) {
  return (
    <tr>
      <td>{data.date}</td>
      <td>{data.paid_views}</td>
      <td>{data.non_paid_views}</td>
      <td>{data.revenue} $</td>
    </tr>
  );
}

export default StatisticsIncomeDetailsItem;
