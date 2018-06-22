import * as React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import Buttons from "./buttons";
import SettingsMenu from "./SettingsMenu";

class SettingsContainer extends React.PureComponent {
  render() {
    console.log(this.props);
    return (
            <div className="SettingsContainer">
              <div className="SettingsMenuContainer">
                <SettingsMenu />
              </div>
              <div className="cardAndButtons">
                <Card />
                <Buttons />
              </div>

            </div>




    );
  }
}
const mapStateToProps = function(state) {
  return {

  };
};
export default connect(mapStateToProps, {})(SettingsContainer);
