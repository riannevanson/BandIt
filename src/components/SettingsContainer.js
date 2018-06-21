import * as React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import Buttons from "./buttons";
import Settings from "./Settings";

class SettingsContainer extends React.PureComponent {
  render() {
    console.log(this.props);
    return (      <div>
            <div className="swipePageContainer">
              <div className="Settings">
                <Settings />
              </div>
              <div className="cardAndButtons">
                <Card />
                <Buttons />
              </div>

            </div>
          </div>



    );
  }
}
const mapStateToProps = function(state) {
  return {

  };
};
export default connect(mapStateToProps, {})(Settings);
