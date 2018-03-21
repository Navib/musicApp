import React from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import DrawerDock from "../../components/drawer_dock";
import BottomNav from "../../components/bottom_nav";
import TopResults from "../../containers/grids/top_results";

const App = props => (
  <div id="home-page">
    <div className="drawer-dock">
      <DrawerDock />
    </div>
    <div className="interactive-view">
      <div className="content-bar">
        <TopResults />
      </div>
    </div>
    <div className="bottom-nav">
      <BottomNav />
    </div>
  </div>
);

App.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

App.defaultProps = {
  buttonText: "defaultText",
  onClick: () => console.log("default click action")
};

export default App;
