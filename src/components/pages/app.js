import React, { Component } from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import DrawerDock from "../../components/drawer_dock";
import BottomNav from "../../components/bottom_nav";
import TopResults from "../../containers/grids/top_results";
import ArtistResults from "../../containers/grids/artist_results";
import AlbumResults from "../../containers/grids/album_results";
import Search from "../../containers/search";
import RecentSearch from "../../containers/recent_search";
import ArtistPage from "../../containers/pages/artist";

class App extends Component {
  renderComponent() {
    switch (this.props.id) {
      case "search-page":
        return (
          <div>
            <Search
              history={this.props.history}
              className="fw-input-wrapper"
              artistId={this.props.match.params.query}
            />
            <RecentSearch history={this.props.history} id="search_page_list" />
          </div>
        );
        break;

      case "results-page":
        return (
          <div>
            <TopResults
              artistId={this.props.match.params.query}
              history={this.props.history}
            />
            <ArtistResults
              artistId={this.props.match.params.query}
              history={this.props.history}
            />
            <AlbumResults
              artistId={this.props.match.params.query}
              history={this.props.history}
            />
          </div>
        );
        break;

      case "artist-page":
        return (
          <ArtistPage
            artistId={this.props.match.params.query}
            history={this.props.history}
          />
        );
        break;
    }
  }
  render() {
    return (
      <div id={this.props.id}>
        <div className="drawer-dock">
          <DrawerDock history={this.props.history} />
        </div>
        <div className="interactive-view">
          <div className="content-bar">{this.renderComponent()}</div>
        </div>
        <div className="bottom-nav">
          <BottomNav history={this.props.history} />
        </div>
      </div>
    );
  }
}

export default App;
