import * as React from "react";
import { connect } from "react-redux";
import * as logic from "../lib/logic"
import {newCard} from '../actions/swipe'

class Card extends React.PureComponent {

  activeCard = () => {
     this.props.newCard(logic.randomCard())
  }

  componentDidMount(){
    console.log('I get called!')
    this.props.newCard(logic.randomCard())
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {" "}
        {/* {this.props.musicians.map(musician => {
          return (
            <div className="card">
              <img className="cardImage" src={musician.picture}/>
              <h2>{musician.name}</h2>
              <h4>{musician.description}</h4>

            </div>
          );
        })} */}
        <h1> {this.props.randomUser.name}</h1>

    <button onClick = {this.activeCard}>Next Match</button>
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

export default connect(mapStateToProps, {newCard})(Card);
