import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const truncString = (str, max, add) => {
  add = add || "...";
  return typeof str === "string" && str.length > max
    ? str.substring(0, max) + add
    : str;
};

class AlbumResults extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.reloadAlbum(this.props.artistId);
  }
  componentWillReceiveProps(nextProps, props) {
    if (nextProps.artistId != this.props.artistId) {
      this.props.reloadAlbum(nextProps.artistId);
    }
  }
  render() {
    if (this.props.albumSearch.data === undefined) return <div />;
    return (
      <div className="search-results album-results">
        <h3 className="section-title">Albums</h3>
        <div className="lost-container">
          {this.props.albumSearch.data.slice(0, 18).map(album => (
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
                <p className="album-name">
                  {truncString(album.artist.name, 20, "...")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default AlbumResults;
