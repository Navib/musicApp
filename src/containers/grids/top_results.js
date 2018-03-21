import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../actions";
import TheComponent from "../../components/grids/top_results";

const mapStateToProps = (state, OwnProps) => {
  return { search: state.search };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const TopResults = connect(mapStateToProps, mapDispatchToProps)(TheComponent);

export default TopResults;
