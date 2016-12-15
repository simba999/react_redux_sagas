/**
 *
 * VideoManagerItem
 *
 */
import React from "react";
import Checkbox from "../../components/Checkbox";
import {Link} from "react-router";
import {shallowEqualImmutable} from "react-immutable-render-mixin";
class VideoManagerItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate(nextProps, nextState) {
    // update olnly if something changed
    return !shallowEqualImmutable(this.props.item, nextProps.item);
  }

  render() {
    const item = this.props.item;
    console.log('draw item')
    if (item.type == 'folder') {
      return this.render_folder(item);
    } else {
      return this.render_file(item);
    }
  }

  set_state(selected) {
    this.refs.checkbox.set_state(selected);
  }

  render_file(item) {
    return (
      <tr>
        <td><Checkbox ref="checkbox" handler={(state) => this.props.handler(item, 'checkbox_event', state)}/></td>
        <td>{item.name}</td>
        <td>102 MB</td>
        <td>{item.uploaded}</td>
        <td>{item.downloads}</td>
        <td>
          <ul className="list-j">
            <li><a href="./"><i className="icon-trash"></i> <span>Remove</span></a></li>
            <li><a href="./"><i className="icon-pencil"></i> <span>Edit</span></a></li>
            <li><a href="./"><i className="icon-paperclip"></i> <span>Attach</span></a></li>
            <li><a href="./"><i className="icon-dots"></i> <span>More</span></a>
              <ul>
                <li><a href="./"><i className="icon-resize"></i> Move</a></li>
                <li><a href="./"><i className="icon-copy2"></i> Copy files</a></li>
                <li><a href="./"><i className="icon-paperclip"></i> Copy Links</a></li>
                <li><a href="./"><i className="icon-pencil"></i> Rename</a></li>
                <li><a href="./"><i className="icon-flag2"></i> Subtiles</a></li>
                <li><a href="./"><i className="icon-embed"></i> Embeds</a></li>
                <li><a href="./"><i className="icon-picture"></i> Change Splash</a></li>
              </ul>
            </li>
          </ul>
        </td>
      </tr>
    );
  }

  render_folder(item) {
    return (
      <tr>
        <td></td>
        <td onClick={() => this.props.handler(item, 'folder_click')}><Link
          to={'/video-manager/' + item.id}>{item.name}</Link></td>
        <td>102 MB</td>
        <td>-</td>
        <td>-</td>
        <td>
          <ul className="list-j">
            <li><a href="./"><i className="icon-trash"></i> <span>Remove</span></a></li>
            <li><a href="./"><i className="icon-pencil"></i> <span>Edit</span></a></li>
          </ul>
        </td>
      </tr>
    );
  }
}
VideoManagerItem.propTypes = {
  item: React.PropTypes.object.isRequired,
  handler: React.PropTypes.func.isRequired,
};
export default VideoManagerItem;
