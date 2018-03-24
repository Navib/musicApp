import React from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import DrawerDock from "../../components/drawer_dock";
import BottomNav from "../../components/bottom_nav";
import TopResults from "../../containers/grids/top_results";
import ArtistResults from "../../containers/grids/artist_results";
import AlbumResults from "../../containers/grids/album_results";

const Results = props => (
  <div id="home-page">
    <div className="drawer-dock">
      <DrawerDock history={props.history} />
    </div>
    <div className="interactive-view">
      <div className="content-bar">
        <TopResults
          artistId={props.match.params.query}
          history={props.history}
        />
        <ArtistResults
          artistId={props.match.params.query}
          history={props.history}
        />
        <AlbumResults
          artistId={props.match.params.query}
          history={props.history}
        />
      </div>
    </div>
    <div className="bottom-nav">
      <BottomNav history={props.history} />
    </div>
  </div>
);

Results.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Results.defaultProps = {
  buttonText: "defaultText",
  onClick: () => console.log("default click action")
};

export default Results;
