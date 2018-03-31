import React, { Component } from "react";
import { Tabs, Tab } from "material-ui/Tabs";
import ArtistAlbums from "../../containers/grids/artist_albums";

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
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
      <Tabs value={this.state.value} onChange={this.handleChange}>
        <Tab label="Tab A" value="a">
          <div>
            <h2 style={styles.headline}>Controllable Tab A</h2>
            <ArtistAlbums artistId={this.props.artistId} />
          </div>
        </Tab>
        <Tab label="Tab B" value="b">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
            <p>
              This is another example of a controllable tab. Remember, if you
              use controllable Tabs, you need to give all of your tabs values or
              else you wont be able to select them.
            </p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}
