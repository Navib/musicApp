import React, { Component } from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import Menu from "../../containers/Menu";

class ArtistPage extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.reloadSingleTopArtist(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps, props) {
    if (nextProps.match.params.id != this.props.match.params.id) {
      this.props.reloadSingleTopArtist(nextProps.match.params.id);
    }
  }
  render() {
    if (this.props.artistPage === undefined) return <div>loading</div>;
    console.log(this.props);
    const backGround = {
      backgroundImage: `url(${this.props.artistPage.picture_xl})`,
      backgroundSize: "cover",
      height: "100%",
      width: "80%",
      margin: "0 auto",
      position: "relative"
    };
    const filter = {
      position: "absolute",
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0, .2)"
    };
    return (
      <div className="single-result single-artist-result">
        <div style={backGround}>
          <div className="filter" style={filter} />
        </div>
        {this.props.artistPage.name}
      </div>
    );
  }
}

ArtistPage.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

ArtistPage.defaultProps = {
  buttonText: "defaultText",
  onClick: () => console.log("default click action")
};

export default ArtistPage;
