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

const TopResults = props => {
  console.log("component: ", props);
  if (props.search.data === undefined) return <div>loading</div>;

  return (
    <div className="search-results top-results">
      <List>
        <Subheader inset={true}>Top Results</Subheader>
        {props.search.data.map(result => (
          <ListItem
            key={result.id}
            leftAvatar={<Avatar src="images/ok-128.jpg" />}
            primaryText={result.title}
            secondaryText={
              <p>
                <span style={{ color: darkBlack }}>{result.artist.name}</span>
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
