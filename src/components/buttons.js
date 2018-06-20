import React, { Component } from "react";
import { setLike, setDislike } from "../actions/buttons";
import { connect } from "react-redux";
import { newCard } from "../actions/swipe";
import {musicians} from "../lib/musicians"
import * as logic from "../lib/logic";

class Buttons extends Component {


	activeCard = () => {
		this.props.newCard(logic.randomCard());
	};

 	newLike = () => {
		this.props.setLike(this.props.randomUser)
		console.log('im getting calle like yes')
		this.activeCard()
	}

  render() {
    console.log(this.props);



    return (
      <div>

				<button className="like-dislike" onClick={this.activeCard}>
          Nah...
        </button>

        <button className="like-dislike" onClick={this.newLike}>
          Lets jam!
        </button>



      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    MatchedArtists: state.MatchedArtists,
		musicians: state.musicians,
		randomUser: state.newCard,

  };
};

export default connect(mapStateToProps, { setLike, setDislike, newCard })(Buttons);
