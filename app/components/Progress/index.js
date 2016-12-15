/**
 *
 * Progress
 *
 */
import React, {PropTypes} from "react";
function Progress({...props}) {
  const {progress, display_label, className, ...rest} = props;
  const myStyle = {
    width: progress + '%',
  }
  return (
    <div className={className}>
      <div className="inner" style={myStyle}/>
    </div>
  );
}
Progress.propTypes = {
  progress: PropTypes.number.isRequired,
};
export default Progress;
