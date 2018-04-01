import React, { Component } from "react";
import AlbumTracks from "../../containers/grids/album_tracks.js";

class AlbumPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("ALBUM COMP: ", this.props);
    return (
      <div className="album-result album-single-result">
        <AlbumTracks albumId={this.props.albumId} />
      </div>
    );
  }
}

export default AlbumPage;
