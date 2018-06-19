import * as React from 'react'
import { connect } from 'react-redux'
import Match from './Match'


class MatchContainer extends React.PureComponent {
  componentDidMount(){

  }
  render() {

    return <div>
      { console.log(this.props) }
      <Match />
      </div>
  }
}
const mapStateToProps = state => {
  return { match: state.MatchedArtists }
}
export default connect(mapStateToProps) (MatchContainer)
