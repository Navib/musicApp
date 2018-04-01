import React, { Component } from "react";
import PropTypes from "prop-types";
import RaisedButton from "material-ui/RaisedButton";
import Divider from "material-ui/Divider";
import TabsView from "../tabs/tabs_view";

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
    const backGround = {
      backgroundImage: `url(${this.props.artistPage.picture_xl})`,
      backgroundSize: "calc(100% - 215px)",
      backgroundAttachment: "fixed",
      height: "calc(100vh - 94px)",
      width: "100%",
      margin: "0 auto",
      position: "absolute",
      top: "0",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right top"
    };
    const filter = {
      position: "absolute",
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0, .4)"
    };
    const { name, nb_fan } = this.props.artistPage;
    console.log(this.props);
    return (
      <div className="single-result single-artist-result">
        <div style={backGround} className="background">
          <div className="filter" style={filter} />
          <div className="center-box">
            <h1 id="name">{name}</h1>
            <p id="fans">{parseInt(nb_fan).toLocaleString()} Followers</p>
          </div>
        </div>
        <Divider />
        <TabsView artistId={this.props.match.params.id} />
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
