/*
 *
 * VideoManagerPage
 *
 */
import React from "react";
import {connect} from "react-redux";
import selectVideoManagerPage from "./selectors";
import elementClass from "element-class";
import {loadedAction} from "containers/ModalsContainer/actions";
import VideoManagerList from "../../components/VideoManagerList";
export class VideoManagerPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
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

  create_folder() {
    console.log('create')
  }

  render() {
    return (
      <article id="content">
        <form action="./" method="post" className="heading-a">
          <h1 className="header-c mb-c">Videos Manager</h1>
          <div className="form-f">
            <p>
              <input type="text" id="ffa" name="ffa" placeholder="Search"/>
              <button type="submit">Submit</button>
            </p>
          </div>
        </form>


        <p className="link-a b text-right"><a className="a" onClick={this.create_folder}>Create Folder</a></p>
        <VideoManagerList files={this.props.files}/>
        <p className="link-b text-center"><a href="./">Load More (400 left)</a></p>
      </article>
    );
  }
}
const mapStateToProps = selectVideoManagerPage();
function mapDispatchToProps(dispatch) {
  return {
    loaded: () => dispatch(loadedAction()),
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(VideoManagerPage);
