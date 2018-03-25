import React, { Component } from "react";
import TextField from "material-ui/TextField";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    this.props.onSubmitToStore(this.state.term);
    this.props.history.push(`/search/results/${this.state.term}`);
    // this.setState({
    //   term: ""
    // });
    return false;
  }
  render() {
    return (
      <form className="search-field" onSubmit={this.onFormSubmit}>
        <TextField
          id="main-search"
          onChange={this.onInputChange}
          fullWidth={true}
          underlineShow={false}
          defaultValue={this.props.artistId}
          autoFocus="autofocus"
        />
      </form>
    );
  }
}

export default Search;
