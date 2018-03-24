import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};

const RecentSearch = props => {
  console.log("recent: ", props);
  return (
    <div className="recent-search">
      <ul>
        {props.recentSearch.filter(onlyUnique).map(search => (
          <Link
            to={`/search/results/${search}`}
            key={props.recentSearch.indexOf(search)}
          >
            <li>{search}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearch;
