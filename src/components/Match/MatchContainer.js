import * as React from 'react'
import Match from './Match/Match'


class MatchContainer extends React.PureComponent {
  componentDidMount(){

  }
  render() {

    return <div>
      <Match />
      </div>
  }
}
const mapStateToProps = state => {
  return { state }
}
export default connect(null, {}) (MatchContainer)
