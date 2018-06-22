import * as React from "react";
import { connect } from "react-redux";
import * as logic from "../lib/logic";
import { newCard } from "../actions/swipe";

class Card extends React.PureComponent {

  componentDidMount() {
    this.props.newCard(logic.randomCard(this.props.musicians));
  }

  render() {
    console.log(this.props);
    return (
    
      <div className="cardContainer">
        <div className="card">
          <img className="cardImage" alt="" src={this.props.randomUser.picture} />
          <div className="textualContent">
            {" "}
            <span>{this.props.randomUser.name}</span>
            <br />
            <br />
            instruments: {this.props.randomUser.instrument}
            <br />
            <br />
            genre: {this.props.randomUser.genre}
            <br />
            <br />
            {this.props.randomUser.description}
            <br />
            <br />
            SkillLevel: {this.props.randomUser.skillLevel}
          </div>
        </div>

        {/* <button onClick={this.activeCard}>Next Match</button> */}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    musicians: state.bands,
    randomUser: state.newCard
  };
};

export default connect(mapStateToProps, { newCard })(Card);
