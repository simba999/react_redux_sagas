/*
 *
 * UploadSuccessPage
 *
 */
import React from "react";
import {connect} from "react-redux";
import selectUploadSuccessPage from "./selectors";
import elementClass from "element-class";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import DirectLinkItem from "components/DirectLinkItem";
import ShortLinkItem from "components/ShortLinkItem";
import EmbedLinkItem from "components/EmbedLinkItem";
Tabs.setUseDefaultStyles(false);
export class UploadSuccessPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
    const self = this;
    return (<section id="content">
      <h1 className="header-c">Upload</h1>
      <p className="scheme-c"><i className="icon-thumb-up"></i> Congratulations videos uploaded successfully <span>Total file size 205mb, Total two files uploaded</span>
      </p>
      <div className="module-c">
        <p>Get direct Link to the uploaded videos</p>


        <Tabs className="tabs-b"
              selectedIndex={0}
        >


          <TabList>


            <Tab><a>Direct Link</a></Tab>
            <Tab><a>Short Link</a></Tab>
            <Tab><a>Embed Link</a></Tab>
          </TabList>


          <TabPanel>
            <form action="./" method="post" className="readonly scrolled-a">
              {
                Object.keys(self.props.uploaded).map(function (code) {
                  const name = self.props.uploaded[code]
                  return <DirectLinkItem key={code} name={name} code={code}/>
                })
              }
            </form>
          </TabPanel>
          <TabPanel>
            <form action="./" method="post" className="readonly scrolled-a">
              {
                Object.keys(self.props.uploaded).map(function (code) {
                  const name = self.props.uploaded[code]
                  return <ShortLinkItem key={code} name={name} code={code}/>
                })
              }
            </form>
          </TabPanel>
          <TabPanel>
            <form action="./" method="post" className="readonly scrolled-a">
              {
                Object.keys(self.props.uploaded).map(function (code) {
                  const name = self.props.uploaded[code]
                  return <EmbedLinkItem key={code} name={name} code={code}/>
                })
              }
            </form>
          </TabPanel>
        </Tabs>


      </div>
    </section>)
  }
}
const mapStateToProps = selectUploadSuccessPage();
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UploadSuccessPage);
