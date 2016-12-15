/**
 *
 * VideoManagerListController
 *
 */
import React from "react";
var {Map, List, Set} = require('immutable');
class VideoManagerListController extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: Map({count: 0, items: Set()})
    };
  }

  set_state_all(selected) {
    for (const val of this.props.files) {
      if (val.type == 'file') {
        this.props.set_state(val.id, selected)
      }
    }
  }

  on_event(event) {
    if (event.selected) {
      this.setState(({data}) => ({
        data: data.update('items', items => items.add(event.item.id))
      }));
    } else {
      this.setState(({data}) => ({
        data: data.update('items', items => items.remove(event.item.id))
      }));
    }
  }

  render() {
    console.log('VideoManagerListController render', this.state.data.get('items').toJS())
    return (
      <div></div>
    );
  }
}
export default VideoManagerListController;
