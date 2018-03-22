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
    this.props.history.push(`/search/results/${this.state.term}`);
    this.setState({
      term: ""
    });
  }
  render() {
    return (
      <form className="search-field" onSubmit={this.onFormSubmit}>
        <TextField
          hintText="ex. Logic"
          floatingLabelText="Search"
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

export default Search;
