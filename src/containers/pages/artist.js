import { connect } from "react-redux";
import actions from "../../actions/";
import { withRouter } from "react-router-dom";

import TheComponent from "../../components/pages/artist";

const mapStateToProps = (state, ownProps) => {
  return { artistPage: state.artistPage };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    reloadSingleTopArtist: id => {
      dispatch({ type: actions.GET_SINGLE_TOP_ARTIST, payload: id });
    }
  };
};

const ArtistPage = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TheComponent)
);

export default ArtistPage;
