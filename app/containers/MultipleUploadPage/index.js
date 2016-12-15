/*
 *
 * MultipleUploadPage
 *
 */
import React from "react";
import Dropzone from "react-dropzone";
import {connect} from "react-redux";
import selectMultipleUploadPage from "./selectors";
import elementClass from "element-class";
import humanize from "humanize";
import {Tabs} from "react-tabs";
import Progress from "components/Progress";
import UploadItem from "components/UploadItem";
import {addFilesAction, deleteFileAction} from "containers/UploadsContainer/actions";
// import Checkbox from 'app/components/Checkbox';
Tabs.setUseDefaultStyles(false);
export class MultipleUploadPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

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

  handleClick(e) {
    this.refs.fileUploader.click();
  }

  handleChange(e) {
    console.log(this.refs.fileUploader.files)
  }

  render() {
    if (Object.keys(this.props.uploads).length > 0) {
      return this.render_list();
    } else {
      return this.render_select();
    }
  }

  onDrop(files) {
    this.props.add_files(files);
  }

  remove_handler(id) {
    this.props.delete_file(id);
  }

  render_list() {
    const self = this;
    return (
      <section id="content">
        <input type="file" id="file" ref="fileUploader" onChange={this.handleChange} style={{display: "none"}}
               multiple/>

        <header className="heading-a">
          <h1 className="header-c mb-d">Upload</h1>
          <p className="link-a b text-right">
            <a className="a" onClick={this.handleClick}>Add Files</a>
            <a className="a" href="./">Delete All</a>
            <a>Upload All</a>
          </p>
        </header>
        <ul className="list-k" data-val="60" data-max="100">
          <li>{humanize.filesize(this.props.totals.speed)} / sec</li>
          <li>01:80:00</li>
          <li>60.00 %</li>
          <li>3.76 MB / 6.00 MB</li>
          <Progress className="fit a" progress={60}/>
        </ul>
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Content type</th>
            <th className="cell-d">Uploaded progress</th>
            <th className="cell-c"></th>
          </tr>
          </thead>
          <tbody>

          {
            Object.keys(self.props.uploads).map(function (key) {
              const item = self.props.uploads[key]
              return <UploadItem key={key} item={item} remove_handler={() => self.remove_handler(key)}/>
            })
          }
          </tbody>
        </table>
      </section>
    );
  }

  render_select() {
    const activeStyle = {
      borderStyle: 'solid',
      borderColor: '#4FC47F'
    }
    const rejectStyle = {
      borderStyle: 'solid',
      borderColor: '#DD3A0A'
    }
    return (
      <div>
        <section id="content">
          <form action="./" method="post">
            <h1 className="header-c">Upload</h1>
            <Dropzone
              ref="dropzone"
              className="file-a"
              activeStyle={activeStyle}
              rejectStyle={rejectStyle}
              onDrop={this.onDrop.bind(this)}
              disablePreview={true}
            >
              <p>Drag and drop your video file here
                <span>Video can be any formant upto 2GB  in size, upto 15min length</span> <label htmlFor="fla"><input
                  type="file" id="fla" name="fla"/> Or Add Files</label></p>
            </Dropzone>
          </form>
        </section>


      </div>
    );
  }
}
const mapStateToProps = selectMultipleUploadPage();
function mapDispatchToProps(dispatch) {
  return {
    add_files: (file) => dispatch(addFilesAction(file)),
    delete_file: (id) => dispatch(deleteFileAction(id)),
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MultipleUploadPage);
