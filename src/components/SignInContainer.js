import * as React from "react";
import { connect } from "react-redux";
import Match from "./Match";
import Card from "./Card";
import Buttons from "./buttons";
import LOGO1 from "../lib/icons/LOGO1.svg";
import MatchContainer from "./MatchContainer";

class SignInContainer extends React.PureComponent {
  render() {
    console.log(this.props);
    return (      <div>
            <div className="swipePageContainer">
              <div className="SignInContainer">
                <SignIn />
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
    MatchedArtists: state.MatchedArtists
  };
};
export default connect(mapStateToProps, {})(SignIn);
