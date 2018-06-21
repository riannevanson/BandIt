import * as React from "react";
import { connect } from "react-redux";
import Match from "./Match";
import Buttons from "./buttons";
import LOGO1 from '../lib/icons/LOGO1.svg'

class MatchContainer extends React.PureComponent {
  componentDidMount() {}
  render() {
    console.log(this.props);
    return (
      <div className="matchContainerPage">
      <div className="headerProfile">
<img className="profilePicture" src={LOGO1} />
        <div className="profileText">BestbandEver</div>
      </div>
      <div className="headerMatches">

        Matches:
      </div>
        <div className="matchCardsContainer">
          {" "}
          {this.props.MatchedArtists.map(match => {
            return (

                <div className="matchCard">
                  <img className="matchImage" src={match.picture} />
                  <div className="textualContent">
                    {match.name}
                    <br />

                    {match.description}
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
