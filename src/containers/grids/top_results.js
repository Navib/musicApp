import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import TheComponent from "../../components/grids/top_results";

const mapStateToProps = (state, ownProps) => {
  console.log("state: ", state);
  return { search: state.search };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    reloadSearch: query => {
      dispatch({ type: actions.GET_SEARCH, payload: query });
    }
  };
};

const TopResults = connect(mapStateToProps, mapDispatchToProps)(TheComponent);

export default TopResults;
