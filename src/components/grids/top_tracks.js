import React, { Component } from "react";
import PropTypes from "prop-types";
import { List, ListItem } from "material-ui/List";
import Avatar from "material-ui/Avatar";
import { grey400, darkBlack, lightBlack } from "material-ui/styles/colors";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import { Link } from "react-router-dom";

const convertToMin = duration => {
  const dur = duration * 1000;
  var minutes = Math.floor(dur / 60000);
  var seconds = ((dur % 60000) / 1000).toFixed(0);

  return <span>{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</span>;
};

class TopTracks extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    if (this.props.artistId != undefined)
      this.props.reloadTopTracks(this.props.artistId);
  }
  componentWillReceiveProps(nextProps, props) {
    if (nextProps.artistId != this.props.artistId) {
      this.props.reloadTopTracks(nextProps.artistId);
    }
  }
  nowPlaying(id) {
    this.props.playTrack(id);
  }
  render() {
    console.log(this.props);
    if (this.props.artistTracks.data === undefined) return <h1>Loading..</h1>;
    return (
      <div className="artist-results artist-track-results">
        <div className="lost-container">
          <List className="artist-track-result-list">
            {this.props.artistTracks.data.slice(0, 5).map(result => (
              <ListItem
                onClick={() => {
                  this.props.playTrack(result.id);
                }}
                key={result.id}
                leftAvatar={
                  <Avatar
                    src={result.album.cover_small}
                    size={60}
                    style={{ borderRadius: "8%", left: "6px" }}
                  />
                }
                primaryText={result.title}
                secondaryText={
                  <p className="result-list-meta">
                    <Link
                      to={`/artist/${result.id}`}
                      key={result.id}
                      className="result-link"
                    >
                      <span style={{ color: darkBlack }}>
                        {result.artist.name}
                      </span>
                    </Link>
                    <span style={{ position: "absolute", top: 0, right: 0 }}>
                      {convertToMin(result.duration)}
                    </span>
                  </p>
                }
                secondaryTextLines={2}
              />
            ))}
          </List>
        </div>
      </div>
    );
  }
}

export default TopTracks;
