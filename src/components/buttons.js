import React, { Component } from "react";
import { setLike, setDislike } from "../actions/buttons";
import { connect } from "react-redux";
import { newCard } from "../actions/swipe";
import {musicians} from "../lib/musicians"
import * as logic from "../lib/logic";
import Like from "../lib/icons/Like.svg";
import Dislike from "../lib/icons/Dislike.svg";

class Buttons extends Component {


	activeCard = () => {
		if (this.props.musicians.length >= 1) {
			return this.props.newCard(logic.randomCard(this.props.musicians))
	} else {
	 		return window.alert('There is no one left to jam with!')
	}
}

 	newLike = () => {
			this.props.setLike(this.props.randomUser)
			this.activeCard()
			this.props.setDislike(this.props.randomUser)
	}

	newDislike = () => {
			this.props.setDislike(this.props.randomUser)
			this.activeCard()
	}

  render() {
    console.log(this.props);

    return (
		
      <div className="likeButtonContainer">

				<div className="like-dislike" onClick={this.newDislike}>
          <img className="image-like-dislike" src={Like} />
        </div>

        <div className="like-dislike" onClick={this.newLike}>
        <img className="image-like-like" src={Dislike} />
			</div>



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
