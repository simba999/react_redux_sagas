/**
 *
 * VideoManagerList
 *
 */
import React from "react";
import VideoManagerItem from "components/VideoManagerItem";
import VideoManagerListController from "components/VideoManagerListController";
import Checkbox from "components/Checkbox";
import {shallowEqualImmutable} from "react-immutable-render-mixin";
class VideoManagerList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate(nextProps, nextState) {
    // update only if something changed
    return !shallowEqualImmutable(this.props.files, nextProps.files);
  }

  on_item_event(item, event_type, payload) {
    if (event_type == 'checkbox_event') {
      this.refs.controller.on_event({
        item: item,
        selected: payload,
      });
    }
  }

  on_event(selected) {
    console.log('on event', selected)
    this.refs.controller.set_state_all(selected)
  }

  set_state(id, selected) {
    this.refs['item_' + id].set_state(selected)
  }

  render() {
    const self = this;
    console.log('draw list')
    return (
      <div>
        <VideoManagerListController files={this.props.files} set_state={this.set_state.bind(this)} ref="controller"/>
        <table className="table-b">
          <thead>
          <tr>
            <th className="cell-a"><Checkbox handler={this.on_event.bind(this)}/></th>
            <th width="350px">Name</th>
            <th>Size</th>
            <th>Uploaded at</th>
            <th>Downloads</th>
            <th className="cell-c"></th>
          </tr>
          </thead>
          <tbody>


          {
            Object.keys(self.props.files).map(function (key) {
              const item = self.props.files[key]
              return <VideoManagerItem ref={'item_' + item.id} key={item.id} item={item}
                                       handler={self.on_item_event.bind(self)}/>
            })
          }


          </tbody>
        </table>
      </div>
    );
  }
}
VideoManagerList.propTypes = {
  files: React.PropTypes.array.isRequired,
};
export default VideoManagerList;
