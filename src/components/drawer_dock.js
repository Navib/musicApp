import React from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import Search from "../containers/search";
import RecentSearch from "../containers/recent_search";

export default class DrawerDock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <Drawer open={this.state.open}>
          <Search history={this.props.history} />
          <RecentSearch history={this.props.history} />
        </Drawer>
      </div>
    );
  }
}
