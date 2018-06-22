import * as React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import Buttons from "./buttons";
import SettingsMenu from "./SettingsMenu";

class ProfileContainer extends React.PureComponent {
  render() {
    console.log(this.props);
    return (
            <div className="SettingsContainer">
              <div className="SettingsMenuContainer">
                <SettingsMenu />
              </div>
              <div className="cardAndButtons">
                <Profile />

              </div>

            </div>




    );
  }
}
const mapStateToProps = function(state) {
  return {

  };
};
export default connect(mapStateToProps, {})(ProfileContainer);
