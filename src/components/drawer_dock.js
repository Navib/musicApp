import React from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import RecentSearch from "../containers/recent_search";
import { Link } from "react-router-dom";

export default class DrawerDock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <Drawer open={this.state.open} className="side-menu">
          <MenuItem>
            <Link to="/search/recent" className="goToSearch">
              Search <i className="fa fa-search" aria-hidden="true" />
            </Link>
          </MenuItem>
          <RecentSearch history={this.props.history} />
        </Drawer>
      </div>
    );
  }
}
