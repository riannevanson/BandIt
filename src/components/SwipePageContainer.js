import * as React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import Buttons from "./buttons";
import MatchContainer from "./MatchContainer";


class SwipePageContainer extends React.PureComponent {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="swipePageContainer">
          <div className="MatchContainer">
            <MatchContainer />
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
const mapStateToProps = state => {
  return { state };
};
export default connect(mapStateToProps)(SwipePageContainer);
