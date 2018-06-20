import * as React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import Buttons from "./Buttons";

class SwipePageContainer extends React.PureComponent {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div class="swipePageContainer">
          <Card />
          <Buttons />

      </div>
    </div>
    );
  }
}
const mapStateToProps = state => {
  return { state };
};
export default connect(mapStateToProps)(SwipePageContainer);
