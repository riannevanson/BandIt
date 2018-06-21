import * as React from "react";
import { connect } from "react-redux";
import Match from "./Match";
import Buttons from "./buttons";
import LOGO1 from "../lib/icons/LOGO1.svg";

class Settings extends React.PureComponent {
  render() {
    console.log(this.props);
    return (

    );
  }
}
const mapStateToProps = function(state) {
  return {

  };
};
export default connect(mapStateToProps, {})(Settings);
