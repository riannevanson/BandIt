import * as React from "react";
import { connect } from "react-redux";
import * as logic from "../lib/logic"
import {newCard} from '../actions/swipe'

class Card extends React.PureComponent {

activeCard = () => {
    const randomCard = logic.randomCard()
    return this.props.newCard(randomCard)
  }


  render() {
    console.log(this.props);
    return (
      <div>
        {" "}
        {this.props.musicians.map(musician => {
          return (
            <div className="card">
              <img className="cardImage" src={musician.picture}/>
              <h2>{musician.name}</h2>
              <h4>{musician.description}</h4>
              <button onClick = {this.activeCard}>Next Match</button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    musicians: state.musicians
  };
};

export default connect(mapStateToProps, {newCard})(Card);
