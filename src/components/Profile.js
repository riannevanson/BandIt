import * as React from "react";
import { connect } from "react-redux";
import * as logic from "../lib/logic";
import { newCard } from "../actions/swipe";

class Profile extends React.PureComponent {

  componentDidMount() {
    this.props.newCard(logic.randomCard(this.props.musicians));
  }

  render() {
    console.log(this.props);
    return (
      <div className="cardContainer">
        <div className="card">
          <img className="cardImage" alt=""  />
          <div className="textualContent">
            {" "}
            <span></span>
            <br />
            <br />
            instrument:
            <br />
            <br />
            genre:
            <br />
            <br />

            <br />
            <br />
            SkillLevel:
          </div>
        </div>

        {/* <button onClick={this.activeCard}>Next Match</button> */}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    musicians: state.musicians,
    randomUser: state.newCard
  };
};

export default connect(mapStateToProps, { newCard })(Profile);
