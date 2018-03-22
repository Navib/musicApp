import React from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import Menu from "../../containers/Menu";

const Artist = props => (
  <div>
    <Menu />
    <RaisedButton label={props.buttonText} onClick={props.onClick} />
  </div>
);

Artist.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Artist.defaultProps = {
  buttonText: "defaultText",
  onClick: () => console.log("default click action")
};

export default Artist;
