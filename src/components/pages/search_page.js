import React from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import DrawerDock from "../drawer_dock";
import BottomNav from "../bottom_nav";
import Search from "../../containers/search";
import RecentSearch from "../../containers/recent_search";

const SearchPage = props => (
  <div id="search-page">
    <div className="drawer-dock">
      <DrawerDock history={props.history} />
    </div>
    <div className="interactive-view">
      <div className="content-bar">
        <Search history={props.history} className="fw-input-wrapper" />
        <RecentSearch history={props.history} id="search_page_list" />
      </div>
    </div>
    <div className="bottom-nav">
      <BottomNav />
    </div>
  </div>
);

SearchPage.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

SearchPage.defaultProps = {
  buttonText: "defaultText",
  onClick: () => console.log("default click action")
};

export default SearchPage;
