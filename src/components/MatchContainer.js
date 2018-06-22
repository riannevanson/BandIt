import * as React from "react";
import { connect } from "react-redux";
import Match from "./Match";
import Buttons from "./buttons";
import LOGO1 from "../lib/icons/LOGO1.svg";
import circle from "../lib/icons/circle.svg";

class MatchContainer extends React.PureComponent {
  render() {
    console.log(this.props);
    return (
      <div className="matchContainerPage">
        <div className="headerProfile">
          <img className="profilePicture" src={LOGO1} />
          <div className="profileText">BestbandEver</div>
        </div>
        <div className="headerMatches">Matches:</div>
        <div className="matchCardsContainer">
          {" "}
          {this.props.MatchedArtists.map(match => {
            return (
              <div className="matchCard">
                <img className="matchImage" src={match.picture} />
                <img className="circle" src={match.circle} />
                <div className="textualContent">
                  <span> {match.name}</span>
                  <br />
                  <br />
                  <div class="chat">{match.chat}</div>



                </div>
              </div>
            );
          })}
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
export default connect(mapStateToProps, {})(MatchContainer);
