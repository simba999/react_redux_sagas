/**
 *
 * DirectLinkItem
 *
 */
import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
class DirectLinkItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <p>
        <label>{this.props.name}</label>
        <input type="url" value={this.getLink()} readOnly/>
        <CopyToClipboard text={this.getLink()}>
          <a>Copy</a>
        </CopyToClipboard>
      </p>
    )
  }

  getLink() {
    return "https://direct_link/" + this.props.code
  }
}
export default DirectLinkItem;
