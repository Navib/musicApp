import React from "react";
import PropTypes from "prop-types";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Avatar from "material-ui/Avatar";
import { grey400, darkBlack, lightBlack } from "material-ui/styles/colors";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";

const convertToMin = duration => {
  const dur = duration * 1000;
  var minutes = Math.floor(dur / 60000);
  var seconds = ((dur % 60000) / 1000).toFixed(0);

  return <span>{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</span>;
};

const TopResults = props => {
  console.log("component: ", props);

  if (props.search.data === undefined) return <div>loading</div>;

  return (
    <div className="search-results top-results">
      <div className="img-result">
        <img src={props.search.data[0].artist.picture_big} />
      </div>
      <List className="top-result-list">
        <Subheader inset={true}>Top Results</Subheader>
        {props.search.data.slice(0, 5).map(result => (
          <ListItem
            key={result.id}
            leftAvatar={<Avatar src="images/ok-128.jpg" />}
            primaryText={result.title}
            secondaryText={
              <p className="result-list-meta">
                <span style={{ color: darkBlack }}>{result.artist.name}</span>
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
  );
};

export default TopResults;
