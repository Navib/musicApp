import React from "react";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import { Link } from "react-router-redux";
import { grey400, darkBlack, lightBlack } from "material-ui/styles/colors";

const onlyPlayUnique = (value, index, self) => {
  console.log(value);
  console.log(index);
  return self.indexOf(value) === index;
};

const headStyle = {
  paddingLeft: "15px"
};
const RecentPlay = props => {
  return (
    <div className="recent-play-wrapper">
      <List className="top-result-list">
        <Subheader inset={true} style={headStyle}>
          Recently Played
        </Subheader>
        {props.recentTracks
          .filter(onlyPlayUnique)
          .slice(0, 4)
          .map((track, index) => (
            <ListItem
              onClick={() => {
                props.playTrack(track.id);
              }}
              key={index}
              primaryText={track.title}
              secondaryText={track.artist.name}
              secondaryTextLines={2}
            />
          ))}
      </List>
    </div>
  );
};

export default RecentPlay;
