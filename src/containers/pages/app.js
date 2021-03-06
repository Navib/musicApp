import { connect } from "react-redux";
import actions from "../../actions/";
import { withRouter } from "react-router-dom";

import TheComponent from "../../components/pages/app";

const mapStateToProps = (state, ownProps) => {
  return {
    buttonText: state.text
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({ type: actions.BASIC_ACTION, text: "new text" });
    }
  };
};

const App = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TheComponent)
);

export default App;
