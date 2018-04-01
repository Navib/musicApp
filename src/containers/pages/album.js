import { connect } from "react-redux";
import actions from "../../actions/";
import { withRouter } from "react-router-dom";

import TheComponent from "../../components/pages/album";

const mapStateToProps = (state, ownProps) => {
  console.log("state album: ", state);
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const AlbumPage = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TheComponent)
);

export default AlbumPage;
