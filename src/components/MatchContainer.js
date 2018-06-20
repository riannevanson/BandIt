import * as React from 'react'
import { connect } from 'react-redux'
import Match from './Match'


class MatchContainer extends React.PureComponent {
  componentDidMount(){

  }
  render() {
console.log(this.props)
    return <div>
      <Match />
      <div>
        {" "}
        {this.props.MatchedArtists.map(match => {
          return (
            <div className="matchCard">
              <img className="matchImage" src={match.picture}/>
              <h2>{match.name}</h2>
              <h4>{match.description}</h4>

            </div>
          );
        })}
      </div>
'hello max and alice'
      </div>
  }
}
const mapStateToProps = function(state) {
  return {
    MatchedArtists: state.MatchedArtists
  };
};
export default connect(mapStateToProps, {}) (MatchContainer)
