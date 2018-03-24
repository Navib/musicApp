import React, { Component } from "react";
import PropTypes from "prop-types";

class ArtistResults extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log(this.props);
    this.props.reloadArtist(this.props.artistId);
  }
  render() {
    return (
      <div className="search-results artist-results">
        <h3 className="section-title">Artists</h3>
        <div className="lost-container">
          <div className="artist-wrapper">
            <img
              src="http://via.placeholder.com/120x120"
              className="artist-avatar"
            />
            <p className="artist-name">Logic</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistResults;
