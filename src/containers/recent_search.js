import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../actions";
import TheComponent from "../components/recent_search";

const mapStateToProps = (state, ownProps) => {
  return { recentSearch: state.recentSearch };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const RecentSearch = connect(mapStateToProps, mapDispatchToProps)(TheComponent);

export default RecentSearch;
