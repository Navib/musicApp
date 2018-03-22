import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../actions";
import TheComponent from "../components/search";

const mapStateToProps = (state, OwnProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: term => {
      dispatch({ type: actions.GET_SEARCH, payload: term });
    }
  };
};

const Search = connect(mapStateToProps, mapDispatchToProps)(TheComponent);

export default Search;
