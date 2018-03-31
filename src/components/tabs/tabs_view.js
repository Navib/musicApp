import React, { Component } from "react";
import { Tabs, Tab } from "material-ui/Tabs";
import ArtistAlbums from "../../containers/grids/artist_albums";
import TopTracks from "../../containers/grids/top_tracks";

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};
const underline = {
  backgroundColor: "rgb(0,0,0)"
};
export default class TabsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "a"
    };
  }

  handleChange = value => {
    this.setState({
      value: value
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
        inkBarStyle={underline}
      >
        <Tab label="Albums" value="a">
          <div>
            <h2 style={styles.headline}>Albums</h2>
            <ArtistAlbums artistId={this.props.artistId} />
          </div>
        </Tab>
        <Tab label="Top Tracks" value="b">
          <div>
            <h2 style={styles.headline}>Top Tracks</h2>
            <TopTracks artistId={this.props.artistId} />
          </div>
        </Tab>
      </Tabs>
    );
  }
}
