import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const truncString = (str, max, add) => {
  add = add || "...";
  return typeof str === "string" && str.length > max
    ? str.substring(0, max) + add
    : str;
};
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
        <div className="lost-container">
          {this.props.artistAlbums.data.slice(0, 18).map(album => (
            <Link
              to={`/album/${album.id}`}
              className="album-link"
              key={album.id}
            >
              <div className="album-wrapper">
                <img src={album.cover_medium} className="album-avatar" />
                <p className="album-name">
                  {truncString(album.title, 30, "...")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default ArtistAlbumResults;
