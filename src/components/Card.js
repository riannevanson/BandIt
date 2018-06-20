import * as React from "react";
import { connect } from "react-redux";
import * as logic from "../lib/logic";
import { newCard } from "../actions/swipe";

class Card extends React.PureComponent {
  activeCard = () => {
    this.props.newCard(logic.randomCard(this.props.musicians));
  };

  componentDidMount() {
    console.log("I get called!");
    this.props.newCard(logic.randomCard(this.props.musicians));
  }

  render() {
    console.log(this.props);
    return (
      <div className="cardContainer">
        <div className="card">
          <img className="cardImage" src={this.props.randomUser.picture} />
          <div className="textualContent">
            {" "}
            <span>{this.props.randomUser.name}</span>
            <br />
            <br />
            {this.props.randomUser.description}
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

export default connect(mapStateToProps, { newCard })(Card);
