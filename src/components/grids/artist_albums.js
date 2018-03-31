import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ArtistAlbumResults extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.reloadArtistAlbums(this.props.artistId);
  }
  componentWillReceiveProps(nextProps, props) {
    if (nextProps.artistId != this.props.artistId) {
      this.props.reloadArtistAlbums(nextProps.artistId);
    }
  }
  render() {
    if (this.props.artistAlbums.data === undefined) return <div />;
    return (
      <div className="artist-page-results artist-album-results">
        <h3 className="section-title">Albums</h3>
        <div className="lost-container">
          {this.props.artistAlbums.data.slice(0, 12).map(album => (
            <Link to="/" className="album-link" key={album.id}>
              <div className="album-wrapper">
                <img src={album.cover_medium} className="album-avatar" />
                <p className="album-name">{album.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default ArtistAlbumResults;
