import * as React from 'react'
import { connect } from 'react-redux'
import SwipePage from './SwipePage'
import Card from './Card'


class SwipePageContainer extends React.PureComponent {
  componentDidMount(){

  }
  render() {

    return <div>
      <SwipePage />
      <Card />
      </div>
  }
}
const mapStateToProps = state => {
  return { state }
}
export default connect(mapStateToProps) (SwipePageContainer)
