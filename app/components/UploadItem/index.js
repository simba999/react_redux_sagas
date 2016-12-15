/**
 *
 * UploadItem
 *
 */
import React from "react";
import Progress from "components/Progress";
import humanize from "humanize";
import {shallowEqualImmutable} from "react-immutable-render-mixin";
class UploadItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate(nextProps, nextState) {
    // update olnly if something changed
    return !shallowEqualImmutable(this.props.item, nextProps.item);
  }

  render() {
    const item = this.props.item;
    return (
      <tr>
        <td>{item.name}</td>
        <td>{humanize.filesize(item.size)}</td>
        <td>{item.content_type}</td>
        <td>{this.display_size(item)} <Progress className="progress-a" progress={item.progress}/></td>
        <td>
          <ul className="list-j">
            <li><a onClick={this.props.remove_handler}><i className="icon-trash"></i> <span>Remove</span></a></li>
            <li><a><i className="icon-upload2"></i> <span>Upload</span></a></li>
          </ul>
        </td>
      </tr>
    );
  }

  display_size(item) {
    if (item.loaded > 0) {
      return humanize.filesize(item.loaded) + '/' + humanize.filesize(item.size);
    } else {
      return humanize.filesize(item.size);
    }
  }
}
export default UploadItem;
