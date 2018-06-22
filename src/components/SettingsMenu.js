import * as React from "react";
import { connect } from "react-redux";
// import Match from "./Match";
// import Buttons from "./buttons";
import LOGO1 from "../lib/icons/LOGO1.svg";
// import { Link } from "react-router-dom";

class SettingsMenu extends React.PureComponent {
  render() {
    console.log(this.props);
    return (
      <div className="settingsMenuContainerPage">
        <div className="headerProfile">
          <img className="profilePicture" alt='' src={LOGO1} />
          <div className="profileText">BestbandEver</div>
        </div>
        <div className="settingMenuItems">
          <div className="settingMenuItem">Edit profile</div>
          <div className="settingMenuItem">Filter Settings</div>
          <div className="settingMenuItem">Notifications</div>
          <br />
          <div className="settingMenuItem">Log out</div>
        </div>
      </div>
    );
  }
}

export default connect(null, {})(SettingsMenu);
