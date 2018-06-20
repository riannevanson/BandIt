import * as React from "react";
import { connect } from "react-redux";
import Match from "./Match";
import Buttons from "./Buttons";

class MatchContainer extends React.PureComponent {
  componentDidMount() {}
  render() {
    console.log(this.props);
    return (
      <div className="matchContainerPage">
<h1>Matches:</h1>
        <div className="matchCardsContainer">
          {" "}
          {this.props.MatchedArtists.map(match => {
            return (

                <div className="matchCard">
                  <img className="matchImage" src={match.picture} />
                  <div className="textualContent">
                    {match.name}
                    <br />
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
