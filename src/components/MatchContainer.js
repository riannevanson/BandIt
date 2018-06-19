import * as React from 'react'
import { connect } from 'react-redux'
import Match from './Match'


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
