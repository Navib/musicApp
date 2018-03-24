import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ArtistResults extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.reloadArtist(this.props.artistId);
  }
  componentWillReceiveProps(nextProps, props) {
    if (nextProps.artistId != this.props.artistId) {
      this.props.reloadArtist(nextProps.artistId);
    }
  }
  render() {
    if (this.props.artistSearch.data === undefined) return <div />;
    return (
      <div className="search-results artist-results">
        <h3 className="section-title">Artists</h3>
        <div className="lost-container">
          {this.props.artistSearch.data.slice(0, 12).map(artist => (
            <Link
              to={`/artist/${artist.id}`}
              key={artist.id}
              className="artist-link"
            >
              <div className="artist-wrapper">
                <img src={artist.picture_medium} className="artist-avatar" />
                <p className="artist-name">{artist.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default ArtistResults;
