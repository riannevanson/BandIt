import * as React from 'react'
import { connect } from 'react-redux'
import SwipePage from './SwipePage'


class SwipePageContainer extends React.PureComponent {
  componentDidMount(){

  }
  render() {

    return <div>
      <SwipePage />
      </div>
  }
}
const mapStateToProps = state => {
  return { state }
}
export default connect(null, {}) (SwipePageContainer)
