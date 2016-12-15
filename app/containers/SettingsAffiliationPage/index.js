/*
 *
 * SettingsAffiliationPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectSettingsAffiliationPage from './selectors';

export class SettingsAffiliationPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <article>
        <div className="accordion-a a">
          <h2>Summary</h2>
          <div>
            <ul className="list-e a">
              <li>Account Balance<br /> <span>$8.62 <span>523</span></span></li>
              <li>Account Paid<br /> <span>$18.62 <span>523</span></span></li>
              <li>Pending Payment<br /> <span>$3.62 <span>/4gb</span></span></li>
              <li>Last Payment<br /> <span>$2.62 <span>/4gb</span></span></li>
            </ul>
            <form action="./" method="post" className="form-g">
              <h3 className="size-b overlay-b">Prefered platform:</h3>
              <ul className="checklist-a a">
                <li><label htmlFor="cla"><input type="radio" id="cla" name="cla" /> <img src="images/payments/g.png" alt="Payment" width="85" height="22" /></label></li>
                <li><label htmlFor="clb"><input type="radio" id="clb" name="cla" /> <img src="images/payments/f.png" alt="Payment" width="41" height="25" /></label></li>
              </ul>
              <p><button type="submit">Request Payout</button></p>
            </form>
            <table className="header">
              <tr>
                <th className="cell-a"><label htmlFor="tba"><input type="checkbox" id="tba" name="tba" /></label></th>
                <th>Amount</th>
                <th>Payment Type</th>
                <th>Date of Request</th>
                <th>Date of Payment</th>
                <th className="cell-c"></th>
              </tr>
              <tr>
                <td><label htmlFor="tbd"><input type="checkbox" id="tbd" name="tbd" /></label></td>
                <td>$8.62</td>
                <td>PayPal</td>
                <td>26/04/2016, 16:18:10</td>
                <td>27/04/2016, 16:18:10</td>
                <td>
                  <ul className="list-j">
                    <li><a href="./"><i className="icon-trash"></i> <span>Remove</span></a></li>
                    <li><a href="./"><i className="icon-print"></i> <span>Print</span></a></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="tbe"><input type="checkbox" id="tbe" name="tbe" /></label></td>
                <td>$8.62</td>
                <td>NetBanking</td>
                <td>26/04/2016, 16:18:10</td>
                <td>27/04/2016, 16:18:10</td>
                <td>
                  <ul className="list-j">
                    <li><a href="./"><i className="icon-trash"></i> <span>Remove</span></a></li>
                    <li><a href="./"><i className="icon-print"></i> <span>Print</span></a></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td><label htmlFor="tbf"><input type="checkbox" id="tbf" name="tbf" /></label></td>
                <td>$8.62</td>
                <td>PayPal</td>
                <td>26/04/2016, 16:18:10</td>
                <td>27/04/2016, 16:18:10</td>
                <td>
                  <ul className="list-j">
                    <li><a href="./"><i className="icon-trash"></i> <span>Remove</span></a></li>
                    <li><a href="./"><i className="icon-print"></i> <span>Print</span></a></li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>
          <h2>Payout details</h2>
          <div>
            <form action="./" method="post" className="form-c a">
              <ul className="checklist-b">
                <li><label htmlFor="cba"><input type="radio" id="cba" name="cb" checked /> <img src="images/payments/a-hover.png" alt="Payment" width="95" height="23" /> <img src="images/payments/a.png" alt="Payment" width="95" height="23" /></label></li>
                <li><label htmlFor="cbb"><input type="radio" id="cbb" name="cb" /> <img src="images/payments/b-hover.png" alt="Payment" width="81" height="30" /> <img src="images/payments/b.png" alt="Payment" width="81" height="30" /></label></li>
                <li><label htmlFor="cbc"><input type="radio" id="cbc" name="cb" /> <img src="images/payments/c-hover.png" alt="Payment" width="95" height="25" /> <img src="images/payments/c.png" alt="Payment" width="95" height="25" /></label></li>
                <li><label htmlFor="cbd"><input type="radio" id="cbd" name="cb" /> <img src="images/payments/d-hover.png" alt="Payment" width="91" height="14" /> <img src="images/payments/d.png" alt="Payment" width="91" height="14" /></label></li>
                <li><label htmlFor="cbe"><input type="radio" id="cbe" name="cb" /> <img src="images/payments/e-hover.png" alt="Payment" width="80" height="22" /> <img src="images/payments/e.png" alt="Payment" width="80" height="22" /></label></li>
              </ul>
              <p>
                <label htmlFor="fca">Email Address</label>
                <input type="email" id="fca" name="fca" required />
              </p>
              <p>
                <label htmlFor="fcb">Wallet Address</label>
                <input type="text" id="fcb" name="fcb" required />
              </p>
              <p><button type="submit">Pay Now</button></p>
            </form>
          </div>
          <h2>Auto Withdraw Settings</h2>
          <div>
            <form action="./" method="post" className="form-h">
              <p>
                <label htmlFor="fha" className="hidden">Payment type</label>
                <select id="fha" name="fha">
                  <option selected>Bank Transfer (Payoneer)</option>
                  <option>Position #1</option>
                  <option>Position #2</option>
                  <option>Position #3</option>
                  <option>Position #4</option>
                  <option>Position #5</option>
                </select>
              </p>
              <p>
                <label htmlFor="fhb">Threshold ($)</label>
                <input type="text" id="fhb" name="fhb" required />
              </p>
              <p>
                <label htmlFor="fhc" className="hidden">Frequency</label>
                <select id="fhc" name="fhc">
                  <option selected>Frequency for 15days</option>
                  <option>Position #1</option>
                  <option>Position #2</option>
                  <option>Position #3</option>
                  <option>Position #4</option>
                  <option>Position #5</option>
                </select>
              </p>
              <p className="submit"><button type="submit">Pay Now</button></p>
            </form>
          </div>
          <h2>Adlevel Settings</h2>
          <div>
            <div className="double b">
              <div>
                <h3 className="size-a overlay-b mb-b light">Adlevel for direct links:</h3>
                <ul className="checklist-a">
                  <li><label htmlFor="clc"><input type="radio" id="clc" name="clc" /> Maximum Ads / 100% earnings</label></li>
                  <li><label htmlFor="cld"><input type="radio" id="cld" name="clc" /> Medium Ads / 50% earnings</label></li>
                  <li><label htmlFor="cle"><input type="radio" id="cle" name="clc" /> Force Users to Disable Adblocks</label></li>
                </ul>
              </div>
              <div>
                <h3 className="size-a overlay-b mb-b light">Adlevel for embeds:</h3>
                <ul className="checklist-a">
                  <li><label htmlFor="clf"><input type="radio" id="clf" name="clf" /> Maximum Ads / 100% earnings</label></li>
                  <li><label htmlFor="clg"><input type="radio" id="clg" name="clf" /> Medium Ads / 50% earnings</label></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

const mapStateToProps = selectSettingsAffiliationPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsAffiliationPage);
