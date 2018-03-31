import getMuiTheme from "material-ui/styles/getMuiTheme";
import { grey100, grey500, grey400 } from "material-ui/styles/colors";

const muiTheme = getMuiTheme(
  {
    palette: {
      primary1Color: grey400,
      primary2Color: grey500,
      primary3Color: grey100
    }
  },
  {
    avatar: {
      borderColor: null
    }
  }
);

export default muiTheme;
