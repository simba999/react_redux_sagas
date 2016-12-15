/**
 *
 * EmbedLinkItem
 *
 */
import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
class EmbedLinkItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
    return "https://embed_code/" + this.props.code
  }
}
export default EmbedLinkItem;
