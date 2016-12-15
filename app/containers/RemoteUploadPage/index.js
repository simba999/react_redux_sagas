/*
 *
 * RemoteUploadPage
 *
 */
import React from "react";
import {connect} from "react-redux";
import selectRemoteUploadPage from "./selectors";
import elementClass from "element-class";
export class RemoteUploadPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    elementClass(document.documentElement).add('a');
    elementClass(document.documentElement).add('b');
    elementClass(document.documentElement).add('c');
  }

  componentWillUnmount() {
    elementClass(document.documentElement).remove('a');
    elementClass(document.documentElement).remove('b');
    elementClass(document.documentElement).remove('c');
  }

  render() {
    var options = [
      {value: 'one', label: 'One'},
      {value: 'two', label: 'Two'}
    ];
    return (
      <section id="content">
        <form action="./" method="post" className="form-e">
          <h1 className="header-c">Remote Upload</h1>
          <p>


            <label htmlFor="fea">URL (s)</label>
            <textarea id="fea" name="fea" placeholder="Insert your link here ( 1 line = 1 link )"></textarea>
            <a className="sticky" href="./">Suported Service</a>
          </p>
          <ul className="list-f a">
            <li><label htmlFor="feb"><input type="file" id="feb" name="feb"/> Browse</label></li>
            <li><a href="./">Save to Folder</a></li>

            <li className="drop-a">


              <label htmlFor="fec" className="hidden">Select Folder</label>

              <select id="fec" name="fec">
                <option disabled>Select Folder</option>
                <option>Fugiat nulla pariatur excepte</option>
                <option>Fugiat nulla pariatur excepte</option>
                <option>Fugiat nulla pariatur excepte</option>
                <option>Fugiat nulla pariatur excepte</option>
              </select>
              <div className="input"></div>
            </li>
          </ul>
          <p>
            <button type="submit">Start Upload</button>
          </p>
          <table>
            <thead>
            <tr>
              <th className="cell-a"><label htmlFor="tba"><input type="checkbox" id="tba" name="tba"/></label></th>
              <th>Created on</th>
              <th>Title</th>
              <th>Description</th>
              <th>Video URL</th>
              <th>Status</th>
              <th className="cell-b"></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><label htmlFor="tbb"><input type="checkbox" id="tbb" name="tbb"/></label></td>
              <td>26/04/2016</td>
              <td>Lorem ipsum dolor sit amet...</td>
              <td>Fugiat nulla pariatur excepte...</td>
              <td className="size-a">https://openload/video/01/my-stream/..</td>
              <td><i className="icon-triangle-down"></i> 25% Uploaded, failed <a href="./"><i
                className="icon-refresh3"></i> <span className="hidden">Refresh</span></a></td>
              <td><a href="./"><i className="icon-trash"></i> <span className="hidden">Remove</span></a></td>
            </tr>
            <tr>
              <td><label htmlFor="tbc"><input type="checkbox" id="tbc" name="tbc"/></label></td>
              <td>26/04/2016</td>
              <td>Lorem ipsum dolor sit amet...</td>
              <td>Fugiat nulla pariatur excepte...</td>
              <td className="size-a">https://openload/video/01/my-stream/..</td>
              <td><i className="icon-triangle-up"></i> Success</td>
              <td><a href="./"><i className="icon-trash"></i> <span className="hidden">Remove</span></a></td>
            </tr>
            <tr>
              <td><label htmlFor="tbd"><input type="checkbox" id="tbd" name="tbd"/></label></td>
              <td>26/04/2016</td>
              <td>Lorem ipsum dolor sit amet...</td>
              <td>Fugiat nulla pariatur excepte...</td>
              <td className="size-a">https://openload/video/01/my-stream/..</td>
              <td><i className="overlay-h icon-triangle-up"></i> 45% Uploaded, pending</td>
              <td><a href="./"><i className="icon-trash"></i> <span className="hidden">Remove</span></a></td>
            </tr>
            </tbody>
          </table>
        </form>
      </section>
    );
  }
}
const mapStateToProps = selectRemoteUploadPage();
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(RemoteUploadPage);
