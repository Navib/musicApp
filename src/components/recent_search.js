import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};

const RecentSearch = props => {
  return (
    <div className="recent-search-wrapper" id={props.id}>
      {props.recentSearch.length === 0 ? " " : <h3>Recently Searched</h3>}
      <ul className="recent-list">
        {props.recentSearch.filter(onlyUnique).map(search => (
          <Link
            to={`/search/results/${search}`}
            key={props.recentSearch.indexOf(search)}
            className="recent-link"
          >
            <li className="recent-list-item">{search}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearch;
